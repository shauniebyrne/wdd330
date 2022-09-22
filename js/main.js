const links = [
    {
      label: "Week1 Notes",
      url: "week1/index.html"
    },
    {
      label: "Week2 Notes",
      url: "week2/index.html"
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
  )