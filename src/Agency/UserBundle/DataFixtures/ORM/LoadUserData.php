<?php

namespace Agency\UserBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Agency\UserBundle\Entity\User;

class LoadUserData extends AbstractFixture implements OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $users = $manager->getRepository("UserBundle:User")->findAll();
        if(count($users) < 1){
            $userGuest = new User();
            $userGuest->setName('user')->setSurname("user");
            $userGuest->setUsername('user');
            $userGuest->setPlainPassword('user');
            $userGuest->setEmail('user@user.com');
            $userGuest->setEnabled(1);
            $userGuest->setRoles([User::ROLE_CLIENT]);
            $manager->persist($userGuest);

            $userAdmin = new User();
            $userAdmin->setName('admin')->setSurname("admin");
            $userAdmin->setUsername('admin');
            $userAdmin->setPlainPassword('admin');
            $userAdmin->setEmail('admin@admin.com');
            $userAdmin->setEnabled(1);
            $userAdmin->setRoles([User::ROLE_ADMIN]);
            $manager->persist($userAdmin);
            $manager->flush();
        }

    }

    public function getOrder(){
        return 1;
    }
}