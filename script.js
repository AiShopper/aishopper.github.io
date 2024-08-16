const items = [
  {
    url: "https://chatgpt.com/g/g-f5UBb6Svp-ai-shopper",
    title: "AI Shopper",
    image: "./assets/AI Shopper.png",
    description:
      "Unlock endless possibilities with one search across all of Amazon. Discover the best deals and top-rated products tailored to your needs and preferences, making your shopping experience seamless and efficient.",
  },
  {
    url: "https://chatgpt.com/g/g-5mErey6X2-ai-tech-shopper",
    title: "AI Tech Shopper",
    image: "./assets/AI Tech Shopper.png",
    description:
      "Explore cutting-edge tech and gadgets designed to elevate your lifestyle. From the latest smart devices to innovative electronics, find top-quality products that keep you at the forefront of technology.",
  },
  {
    url: "https://chatgpt.com/g/g-glEsGSMP2-ai-home-shopper",
    title: "AI Home Shopper",
    image: "./assets/AI Home Shopper.png",
    description:
      "Turn your home into a masterpiece with the best tools and materials. Whether you’re renovating or decorating, find everything you need to create a stylish and functional living space.",
  },
  {
    url: "https://chatgpt.com/g/g-jUnICeCvO-ai-kitchen-shopper",
    title: "AI Kitchen Shopper",
    image: "./assets/AI Kitchen Shopper.png",
    description:
      "Master your culinary skills with premium kitchen essentials. Discover high-quality cookware, appliances, and utensils that help you cook like a pro and enhance your kitchen experience.",
  },
  {
    url: "https://chatgpt.com/g/g-CUbaXa6Qy-ai-auto-shopper",
    title: "AI Auto Shopper",
    image: "./assets/AI Auto Shopper.png",
    description:
      "Drive with confidence using the finest car parts and accessories. Find everything from performance upgrades to essential maintenance tools, ensuring your vehicle runs smoothly and efficiently.",
  },
  {
    url: "https://chatgpt.com/g/g-g2aZLnlpJ-ai-garden-shopper",
    title: "AI Garden Shopper",
    image: "./assets/AI Garden Shopper.png",
    description:
      "Create your perfect outdoor sanctuary with top-rated garden tools and decor. Whether you’re growing your dream garden or beautifying your outdoor space, find the best products to enhance your green thumb.",
  },
  {
    url: "https://chatgpt.com/g/g-rr7aCZihw-ai-digital-shopper",
    title: "AI Digital Shopper",
    image: "./assets/AI Digital Shopper.png",
    description:
      "Power your productivity with the latest in computer technology. From high-performance laptops to essential accessories, discover products designed to boost your work and play.",
  },
  {
    url: "https://chatgpt.com/g/g-z8i0whOFT-ai-book-shopper",
    title: "AI Book Shopper",
    image: "./assets/AI Book Shopper.png",
    description:
      "Expand your mind with a vast selection of books for every interest. Explore genres, bestsellers, and hidden gems to satisfy your reading cravings and fuel your intellectual curiosity.",
  },
  {
    url: "https://chatgpt.com/g/g-AqXenxnyG-ai-toy-shopper",
    title: "AI Toy Shopper",
    image: "./assets/AI Toy Shopper.png",
    description:
      "Ignite joy and creativity with toys and games for everyone. Find the latest and most popular toys that inspire imagination, learning, and fun for children and adults alike.",
  },
  {
    url: "https://chatgpt.com/g/g-8dNof3lnr-ai-office-shopper",
    title: "AI Office Shopper",
    image: "assets/AI Office Shopper.png",
    description:
      "Equip your workspace with everything you need to succeed. Discover ergonomic furniture, efficient office supplies, and tech gadgets that make working from home or the office more productive and comfortable.",
  },
  {
    url: "https://chatgpt.com/g/g-yfM8OtKQV-ai-mobile-shopper",
    title: "AI Mobile Shopper",
    image: "./assets/AI Tech Shopper.png",
    description:
      "Stay ahead of the curve with the newest smartphones and accessories. Find the latest models, must-have accessories, and deals that keep you connected and on-trend.",
  },
];
const container = document.getElementById("items-container");
items.forEach((item) => {
  const box = document.createElement("div");
  box.className = "box4";
  box.addEventListener("click", () => {
    window.location.href = item.url;
    console.log(window.location.href); // Redirect to the URL
  });

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;
  img.className = "circleImage";
  const title = document.createElement("h2");
  title.innerText = item.title;
  title.className = "title";

  const description = document.createElement("p");
  description.innerText = item.description;
  description.className = "description";

  box.appendChild(img);
  box.appendChild(title);
  box.appendChild(description);
  container.appendChild(box);
});
function typeWriter(element, text, delay, callback) {
  let i = 0;
  element.innerHTML = ""; // Clear the element content
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, delay);
    } else if (callback) {
      callback();
    }
  }
  type();
}

function startTyping() {
  const boxes = document.querySelectorAll(".box1, .box2"); // Select all boxes
  let delayBetweenBoxes = 500; // Delay before the next box starts typing
  let typingSpeed = 20; // Speed of typing

  function typeNextBox(index) {
    if (index < boxes.length) {
      const box = boxes[index];
      box.style.opacity = "1"; // Ensure visibility for typing effect
      typeWriter(box, box.getAttribute("data-text"), typingSpeed, () => {
        setTimeout(() => typeNextBox(index + 1), delayBetweenBoxes);
      });
    }
  }

  typeNextBox(0);
}

document.addEventListener("DOMContentLoaded", startTyping);
