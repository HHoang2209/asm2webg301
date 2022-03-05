<?php

namespace App\Controller;

use App\Entity\Order;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/order')]
class OrderController extends AbstractController
{
    // #[Route('/', name: 'Order')]
    // public function index(): Response
    // {   
    //     $orders = $this ->getDoctrine() -> getRepository(Order::class)->findAll();
    //     return $this->render('order/index.html.twig', [
    //         'orders' => $orders,
    //     ]);
    // }
    // #[Route('/detail/{id}', name: 'Order_detail')]
    // public function Order_detail($id)
    // {   
    
    //     $order = $this ->getDoctrine() -> getRepository(Detail::class)->find($id);
    //     if ($order == null) {
    //         $this -> addFlash('error', 'Order not found');
    //         return $this -> redirectToRoute('Order');
    //     }
    //     return $this->render('order/detail.html.twig', [
    //         'order' => $order,
    //     ]);
    // }

    // #[Route('/delete/{id}', name: 'Order_delete')]
    // public function Order_delete($id)
    // {   
    
    //     $order = $this ->getDoctrine() -> getRepository(Order::class)->find($id);
    //     $detail = $this ->getDoctrine() -> getRepository(Detail::class) ->find($id);
    //     if ($order == null) {
    //         $this -> addFlash('error', 'Order not found or this order has already been deleted');
    //         return $this -> redirectToRoute('Order');
    //     }
    //     $manager = $this -> getDoctrine() -> getManager();
    //     $manager -> remove($order);
    //     $manager -> flush();
    //     $this -> addFlash('success', 'Order deleted successfully');
    //     return $this->redirectToRoute('Order', [
             
    //     ]);
    // }
}
