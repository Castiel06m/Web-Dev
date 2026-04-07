from django.urls import path #, include
# from rest_framework.routers import DefaultRouter
# from .views import CategoryViewSet, ProductViewSet
# from api import views

# FOR FBV (LEVEL 2)

# from api.views.fbv import (
#     products_list, product_detail, 
#     categories_list, category_detail, category_products
# )  
# urlpatterns = [
#     path('categories/', categories_list),
#     path('categories/<int:category_id>/', category_detail),
#     path('categories/<int:category_id>/products/', category_products),         
    
#     path('products/', products_list),
#     path('products/<int:product_id>/', product_detail),
# ]


# FOR CBV (LEVEL 3)
# from api.views.cbv import (
#     CategoryListAPIView, CategoryDetailAPIView,
#     ProductListAPIView, ProductDetailAPIView
# )
# from api.views.fbv import category_products 

# urlpatterns = [
#     path('categories/', CategoryListAPIView.as_view()),
#     path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),
#     path('categories/<int:category_id>/products/', category_products),
    
#     path('products/', ProductListAPIView.as_view()),
#     path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
# ]


# FOR MIXIXNS (LEVEL 4)
# from api.views.mixins import (
#     CategoryListAPIView, CategoryDetailAPIView,
#     ProductListAPIView, ProductDetailAPIView
# )

# urlpatterns = [
#     path('categories/', CategoryListAPIView.as_view()),
#     path('categories/<int:pk>/', CategoryDetailAPIView.as_view()),
#     path('categories/<int:category_id>/products/', category_products),
    
#     path('products/', ProductListAPIView.as_view()),
#     path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
# ]

# FOR GENERICS (LEVEL 5)
from api import views 

urlpatterns = [
    path('categories/', views.CategoryListAPIView.as_view()), 
    path('categories/<int:pk>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view()),
    path('products/', views.ProductListAPIView.as_view()), 
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()), 
]


# router = DefaultRouter()
# router.register(r'categories', CategoryViewSet)
# router.register(r'products', ProductViewSet)

# urlpatterns = [
#     path('', include(router.urls)),
# ]




# urlpatterns = [
#     path('products/', views.product_list),
#     path('products/<int:id>/', views.product_detail),
#     path('categories/', views.category_list),
#     path('categories/<int:id>/', views.category_detail),
#     path('categories/<int:id>/products/', views.category_products),
# ]