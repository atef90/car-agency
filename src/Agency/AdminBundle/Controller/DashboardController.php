<?php

namespace Agency\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DashboardController extends Controller
{


    /**
     * @Route("/dashboard",name="admin_dashboard")
     * @param Request $request
     * @return Response
     */
    public function dashboardAction(Request $request)
    {
        return $this->render('AdminBundle:Dashboard:index.html.twig');
    }
}
