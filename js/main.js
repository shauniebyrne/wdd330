const links = [
    {
      label: "Week1 Notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 Notes",
      url: "week2/index.html"
    },
    {
      label: "Week3 Notes",
      url: "week3/index.html"
    },
    {
      label: "Week4 Notes",
      url: "week4/index.html"
    },
    {
      label: "Week5 Notes",
      url: "week5/index.html"
    },
    {
      label: "ToDo List Challenge",
      url: "todo_challenge/index.html"
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