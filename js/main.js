const links = [
    {
      label: "Week 1 Notes",
      url: "week1/index.html"
    },
    {
      label: "Week 2 Notes",
      url: "week2/index.html"
    },
    {
      label: "Week 3 Notes",
      url: "week3/index.html"
    },
    {
      label: "Week 4 Notes",
      url: "week4/index.html"
    },
    {
      label: "Week 5 Notes",
      url: "week5/index.html"
    },
    {
      label: "ToDo List Challenge",
      url: "todo_challenge/index.html"
    },
    {
      label: "Week 7 Notes",
      url: "week7/index.html"
    },
    {
      label: "Week 8 Notes",
      url: "week8/index.html"
    },
    {
      label: "Week 9 Notes",
      url: "week9/index.html"
    },
    {
      label: "Week 10 Notes",
      url: "Week10/index.html"
    },
    {
      label: "Final Project",
      url: "final_project/index.html"
    }
  ]

const ol = document.getElementById("linkslist");

links.forEach( link => {
        const li = document.createElement("li");
        const href = document.createElement("a");
        href.setAttribute("href", link.url);
        href.innerText = link.label;

        li.appendChild(href);
        ol.appendChild(li);
    }
  );