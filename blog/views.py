from datetime import date
from django.shortcuts import render

all_posts=[
    {
        "slug": "make-progress", 
        "image": "clock.jpg", 
        "author": "Mariam", 
        "date": date(2023, 5, 3), 
        "title": "What's Holding You Back From Your Machine Learning Goals?", 
        "excerpt":"Identify and Tackle Your Self-Limiting Beliefs and Finally Make Progress", 
        "content": """
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Eius, fugit. Perferendis sunt similique ea, porro cum expedita 
        optio vitae autem sapiente quasi ullam libero iusto, pariatur 
        velit temporibus rem fuga!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Eius, fugit. Perferendis sunt similique ea, porro cum expedita 
        optio vitae autem sapiente quasi ullam libero iusto, pariatur 
        velit temporibus rem fuga!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Eius, fugit. Perferendis sunt similique ea, porro cum expedita 
        optio vitae autem sapiente quasi ullam libero iusto, pariatur 
        velit temporibus rem fuga!
        """

    }, 
    {
        "slug": "about-brain", 
        "image": "clock.jpg", 
        "author": "Mariam", 
        "date": date(2022, 12, 13), 
        "title": "The truth about your brain", 
        "excerpt":"There is no limit to how smart you can be and smartness is a process. ", 
        "content": """
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Eius, fugit. Perferendis sunt similique ea, porro cum expedita 
        optio vitae autem sapiente quasi ullam libero iusto, pariatur 
        velit temporibus rem fuga!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Eius, fugit. Perferendis sunt similique ea, porro cum expedita 
        optio vitae autem sapiente quasi ullam libero iusto, pariatur 
        velit temporibus rem fuga!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Eius, fugit. Perferendis sunt similique ea, porro cum expedita 
        optio vitae autem sapiente quasi ullam libero iusto, pariatur 
        velit temporibus rem fuga!
        """

    }, 
     {
        "slug": "mistakes-are-opportunities", 
        "image": "mariam.png", 
        "author": "Mariam", 
        "date": date(2021, 12, 13), 
        "title": "Mistakes are opportunities.", 
        "excerpt":"People who are cultivating a growth mindset take a different, more positive view of mistakes. They view mistakes as valuable—not as something negative or something to be embarrassed by— and take time to learn from them. ", 
        "content": """
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Eius, fugit. Perferendis sunt similique ea, porro cum expedita 
        optio vitae autem sapiente quasi ullam libero iusto, pariatur 
        velit temporibus rem fuga!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Eius, fugit. Perferendis sunt similique ea, porro cum expedita 
        optio vitae autem sapiente quasi ullam libero iusto, pariatur 
        velit temporibus rem fuga!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Eius, fugit. Perferendis sunt similique ea, porro cum expedita 
        optio vitae autem sapiente quasi ullam libero iusto, pariatur 
        velit temporibus rem fuga!
        """

    }
]

def get_date(post):
    return post['date']

# Create your views here.

def starting_page(request):
    sorted_posts=sorted(all_posts, key=get_date)
    latest_posts=sorted_posts[-3:]
    return render(request, "blog/index.html", {"posts":latest_posts})

def posts(request):
    return render(request, "blog/all-posts.html", {
        "all_posts":all_posts
    })

def post_detail(request, slug):
    identified_post=next(post for post in all_posts if post['slug']==slug)
    return render(request, "blog/post-detail.html", {
        "post":identified_post
    })
