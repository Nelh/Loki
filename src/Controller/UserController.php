<?php

namespace App\Controller;

use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;

use App\Entity\User;
use App\Entity\ValidationHelper;
use App\Repository\UserRepository;
use Carbon\CarbonImmutable;

class UserController extends AbstractController
{
    private SerializerInterface $serializer;
    private ValidatorInterface $validator;
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function create(Request $request, MailerInterface $mailer, $appEmail, $appLink): JsonResponse
    {
        $content = json_decode($request->getContent());
        $validations = new ValidationHelper();
        $validations->name('name')->value($content->name)->pattern('alpha')->required();
        $validations->name('surname')->value($content->surname)->pattern('alpha')->required();
        $validations->name('email')->value($content->email)->email()->required();
        $validations->name('password')->value($content->password)->password()->required();
        $validations->name('confirm_password')->value($content->confirm_password)->equal($content->password)->required();
        $validations->name('cellphone')->value($content->cellphone)->customPattern('[0-9]{10}');
        
        $user = $this->userRepository->findOneBy(['email' => $content->email]);
        // Returns the erros to the forms
        if(!$validations->isValid() || !empty($user)){
            $errors = $validations->getErrors();
            return new JsonResponse([
                'code' => 1,
                'msg' => 'error',
                'errors' => $validations->getErrors() ?? ['email' => 'Email Already is taken!'],
                'actions' => [
                    'actioned' => true,
                    'status' => 'danger',
                    'msg' => 'There is an error',
                ]
            ]);
        }

        // Create a new user
        $user = new User();
        $user->setName($content->name);
        $user->setSurname($content->surname);
        $user->setEmail($content->email);
        $user->setPassword(password_hash($content->password, PASSWORD_BCRYPT));
        $user->setCountry($content->country);
        $user->setColour($content->colour);
        $user->setCellphone($content->cellphone);
        $user->setComments($content->comments);
        if(!empty($content->birthday)) {
            $user->setBirthday(CarbonImmutable::createFromFormat('Y-m-d',$content->birthday));
        }

        try {
            // save user in database
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // Send Email
            $email = (new TemplatedEmail())
                ->from($user->getEmail())
                ->to($appEmail)
                ->subject('New Registration')
                ->htmlTemplate('emails/admin.html.twig')
                ->context([
                    'id' => $user->getId(),
                    'path' => $appLink,
                ]);

                $mailer->send($email);
                return new JsonResponse([
                    'code' => 0,
                    'actions' => [
                        'actioned' => true,
                        'status' => 'success',
                        'msg' => 'User saved, Email Sent!',
                    ]
                ],Response::HTTP_OK);

        } catch(\Exception $e) {
            return new JsonResponse([
                'code' => 1,
                'actions' => [
                    'actioned' => true,
                    'status' => 'danger',
                    'msg' => 'Something went wrong!',
                    'exception' => $e->getMessage(),
                ]
            ]);
        }
    }


    public function edit($id): JsonResponse
    {
        if(empty($id)) {
            return new JsonResponse([
                'message'=> 'Missing Id',
                'actions' => [
                    'actioned' => true,
                    'status' => 'secondary',
                    'msg' => 'No user match!',
                ]
            ]);
        }

        $user = $this->userRepository->findOneBy(['id' => $id]);
        if(!$user) {
            return new JsonResponse("User doesn't exist");
        }

        return new JsonResponse([
            'id' => $user->getId(),
            'name' => $user->getName(),
            'surname' => $user->getSurname(),
            'email' => $user->getEmail(),
            'country' => $user->getCountry(),
            'colour' => $user->getColour(),
            'birthday' => $user->getBirthday(),
            'cellphone' => $user->getCellphone(),
            'comments' => $user->getComments(),
            'password' => '',
            'confirm_password' => '',
        ], Response::HTTP_OK);
    }


    public function update(Request $request): JsonResponse
    {
        $content = json_decode($request->getContent(), true);
        $data = $content['data'];

        $validations = new ValidationHelper();
        $validations->name('name')->value($data['name'])->pattern('alpha')->required();
        $validations->name('surname')->value($data['surname'])->pattern('alpha')->required();
        $validations->name('email')->value($data['email'])->email()->required();
        $validations->name('password')->value($data['password'])->password()->required();
        $validations->name('confirm_password')->value($data['confirm_password'])->equal($data['password'])->required();
        $validations->name('cellphone')->value($data['cellphone'])->customPattern('[0-9]{10}');

        $user = $this->userRepository->findOneBy(['id' => $content['id']]);
        if(!$user) {
            return new JsonResponse("User doesn't exist");
        }
        
        // Returns the errors 
        if(!$validations->isValid()){
            return new JsonResponse([
                'code' => 1,
                'msg' => 'error',
                'errors' => $validations->getErrors(),
                'actions' => [
                    'actioned' => true,
                    'status' => 'danger',
                    'msg' => 'There is an error',
                ]
            ]);
        }
        
        $user->setName($data['name']);
        $user->setSurname($data['surname']);
        $user->setEmail($data['email']);
        $user->setPassword(password_hash($data['password'], PASSWORD_BCRYPT));
        $user->setCountry($data['country']);
        $user->setColour($data['colour']);
        $user->setCellphone($data['cellphone']);
        $user->setComments($data['comments']);
        if(!empty($data['birthday'])) {
            $user->setBirthday(CarbonImmutable::createFromFormat('Y-m-d',$data['birthday']));
        }

        try {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
            return new JsonResponse([
                'code' => 0,
                'actions' => [
                    'actioned' => true,
                    'status' => 'success',
                    'msg' => 'Updated Successfully!',
                ]
            ], Response::HTTP_OK);

        } catch(\Exception $e) {
            return new JsonResponse([
                'code' => 1,
                'actions' => [
                    'actioned' => true,
                    'status' => 'danger',
                    'msg' => 'Something went wrong!',
                    'exception' => $e->getMessage(),
                ]
            ]);
        }
    
    }
}