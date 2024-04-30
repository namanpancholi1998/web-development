function createCard(
  cardNum,
  imgUrl,
  videoDuration,
  title,
  cName,
  cViews,
  monthsOld
) {
  const container = document.querySelector(".container");
  const card = document.createElement("div");
  card.classList.add("card");

  const cardNumber = document.createElement("div");
  cardNumber.classList.add("card-number");
  cardNumber.textContent = cardNum;
  card.appendChild(cardNumber);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const img = document.createElement("img");
  img.src = imgUrl;
  img.alt = "thumbnail";
  imgContainer.appendChild(img);

  const duration = document.createElement("span");
  duration.classList.add("duration");
  duration.textContent = videoDuration;
  imgContainer.appendChild(duration);

  const cardDetails = document.createElement("div");
  cardDetails.classList.add("details");

  const p = document.createElement("p");
  p.textContent = title;
  cardDetails.appendChild(p);

  const channelName = document.createElement("span");
  channelName.textContent = cName;
  cardDetails.appendChild(channelName);

  const views = document.createElement("span");
  views.textContent = cViews;
  cardDetails.appendChild(views);

  const month = document.createElement("span");
  month.textContent = monthsOld;
  cardDetails.appendChild(month);

  card.appendChild(imgContainer);
  card.appendChild(cardDetails);

  container.appendChild(card);
}

createCard(
  2,
  "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A",
  "17:27",
  "JavaScript Exercise 12 - Solutions and Shoutouts",
  "CodeWithHarry",
  "727K",
  "2 months ago"
);

createCard(
  3,
  "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A",
  "17:27",
  "JavaScript Exercise 12 - Solutions and Shoutouts",
  "CodeWithHarry",
  "717K",
  "2 months ago"
);
createCard(
  4,
  "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A",
  "17:27",
  "JavaScript Exercise 12 - Solutions and Shoutouts",
  "CodeWithHarry",
  "747K",
  "2 months ago"
);
createCard(
  5,
  "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A",
  "17:27",
  "JavaScript Exercise 12 - Solutions and Shoutouts",
  "CodeWithHarry",
  "737K",
  "2 months ago"
);
createCard(
  6,
  "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A",
  "17:27",
  "JavaScript Exercise 12 - Solutions and Shoutouts",
  "CodeWithHarry",
  "787K",
  "2 months ago"
);
createCard(
  7,
  "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A",
  "17:27",
  "JavaScript Exercise 12 - Solutions and Shoutouts",
  "CodeWithHarry",
  "729K",
  "2 months ago"
);
createCard(
  8,
  "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A",
  "17:27",
  "JavaScript Exercise 12 - Solutions and Shoutouts",
  "CodeWithHarry",
  "728K",
  "2 months ago"
);
