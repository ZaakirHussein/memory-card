const playerObjs = [
  {
    name: "Kareem Abdul-Jabbar",
    imageSrc: "/src/images/playerHeadshots/Abdul-Jabbar, Kareem.png",
  },
  {
    name: "Ray Allen",
    imageSrc: "/src/images/playerHeadshots/Allen, Ray.png",
  },
  {
    name: "Giannis Antetokounmpo",
    imageSrc: "/src/images/playerHeadshots/Antetokounmpo, Giannis.png",
  },
  {
    name: "Carmelo Anthony",
    imageSrc: "/src/images/playerHeadshots/Anthony, Carmelo.png",
  },
  {
    name: "Nate Archibald",
    imageSrc: "/src/images/playerHeadshots/Archibald, Nate.png",
  },
  {
    name: "Paul Arizin",
    imageSrc: "/src/images/playerHeadshots/Arizin, Paul.png",
  },
  {
    name: "Charles Barkley",
    imageSrc: "/src/images/playerHeadshots/Barkley, Charles.png",
  },
  {
    name: "Rick Barry",
    imageSrc: "/src/images/playerHeadshots/Barry, Rick.png",
  },
  {
    name: "Elgin Baylor",
    imageSrc: "/src/images/playerHeadshots/Baylor, Elgin.png",
  },
  {
    name: "Dave Bing",
    imageSrc: "/src/images/playerHeadshots/Bing, Dave.png",
  },
  {
    name: "Larry Bird",
    imageSrc: "/src/images/playerHeadshots/Bird, Larry.png",
  },
  {
    name: "Kobe Bryant",
    imageSrc: "/src/images/playerHeadshots/Bryant, Kobe.png",
  },
  {
    name: "Wilt Chamberlain",
    imageSrc: "/src/images/playerHeadshots/Chamberlain, Wilt.png",
  },
  {
    name: "Bob Cousy",
    imageSrc: "/src/images/playerHeadshots/Cousy, Bob.png",
  },
  {
    name: "Dave Cowens",
    imageSrc: "/src/images/playerHeadshots/Cowens, Dave.png",
  },
  {
    name: "Billy Cunningham",
    imageSrc: "/src/images/playerHeadshots/Cunningham, Billy.png",
  },
  {
    name: "Stephen Curry",
    imageSrc: "/src/images/playerHeadshots/Curry, Stephen.png",
  },
  {
    name: "Anthony Davis",
    imageSrc: "/src/images/playerHeadshots/Davis, Anthony.png",
  },
  {
    name: "Dave DeBusschere",
    imageSrc: "/src/images/playerHeadshots/DeBusschere, Dave.png",
  },
  {
    name: "Clyde Drexler",
    imageSrc: "/src/images/playerHeadshots/Drexler, Clyde.png",
  },
  {
    name: "Tim Duncan",
    imageSrc: "/src/images/playerHeadshots/Duncan, Tim.png",
  },
  {
    name: "Kevin Durant",
    imageSrc: "/src/images/playerHeadshots/Durant, Kevin.png",
  },
  {
    name: "Julius Erving",
    imageSrc: "/src/images/playerHeadshots/Erving, Julius.png",
  },
  {
    name: "Patrick Ewing",
    imageSrc: "/src/images/playerHeadshots/Ewing, Patrick.png",
  },
  {
    name: "Walt Frazier",
    imageSrc: "/src/images/playerHeadshots/Frazier, Walt.png",
  },
  {
    name: "Kevin Garnett",
    imageSrc: "/src/images/playerHeadshots/Garnett, Kevin.png",
  },
  {
    name: "George Gervin",
    imageSrc: "/src/images/playerHeadshots/Gervin, George.png",
  },
  {
    name: "Hal Greer",
    imageSrc: "/src/images/playerHeadshots/Greer, Hal.png",
  },
  {
    name: "James Harden",
    imageSrc: "/src/images/playerHeadshots/Harden, James.png",
  },
  {
    name: "John Havlicek",
    imageSrc: "/src/images/playerHeadshots/Havlicek, John.webp",
  },
  {
    name: "Elvin Hayes",
    imageSrc: "/src/images/playerHeadshots/Hayes, Elvin.png",
  },
  {
    name: "Allen Iverson",
    imageSrc: "/src/images/playerHeadshots/Iverson, Allen.png",
  },
  {
    name: "LeBron James",
    imageSrc: "/src/images/playerHeadshots/James, LeBron.png",
  },
  {
    name: "Magic Johnson",
    imageSrc: "/src/images/playerHeadshots/Johnson, Magic.png",
  },
  {
    name: "Sam Jones",
    imageSrc: "/src/images/playerHeadshots/Jones, Sam.png",
  },
  {
    name: "Michael Jordan",
    imageSrc: "/src/images/playerHeadshots/Jordan, Michael.png",
  },
  {
    name: "Jason Kidd",
    imageSrc: "/src/images/playerHeadshots/Kidd, Jason.png",
  },
  {
    name: "Kawhi Leonard",
    imageSrc: "/src/images/playerHeadshots/Leonard, Kawhi.png",
  },
  {
    name: "Damian Lillard",
    imageSrc: "/src/images/playerHeadshots/Lillard, Damian.png",
  },
  {
    name: "Jerry Lucas",
    imageSrc: "/src/images/playerHeadshots/Lucas, Jerry.png",
  },
  {
    name: "Karl Malone",
    imageSrc: "/src/images/playerHeadshots/Malone, Karl.png",
  },
  {
    name: "Moses Malone",
    imageSrc: "/src/images/playerHeadshots/Malone, Moses.png",
  },
  {
    name: "Pete Maravich",
    imageSrc: "/src/images/playerHeadshots/Maravich, Pete.png",
  },
  {
    name: "Bob McAdoo",
    imageSrc: "/src/images/playerHeadshots/McAdoo, Bob.png",
  },
  {
    name: "Kevin McHale",
    imageSrc: "/src/images/playerHeadshots/McHale, Kevin.png",
  },
  {
    name: "George Mikan",
    imageSrc: "/src/images/playerHeadshots/Mikan, George.png",
  },
  {
    name: "Reggie Miller",
    imageSrc: "/src/images/playerHeadshots/Miller, Reggie.png",
  },
  {
    name: "Earl Monroe",
    imageSrc: "/src/images/playerHeadshots/Monroe, Earl.png",
  },
  {
    name: "Steve Nash",
    imageSrc: "/src/images/playerHeadshots/Nash, Steve.png",
  },
  {
    name: "Dirk Nowitzki",
    imageSrc: "/src/images/playerHeadshots/Nowitzki, Dirk.png",
  },
  {
    name: "Hakeem Olajuwon",
    imageSrc: "/src/images/playerHeadshots/Olajuwon, Hakeem.png",
  },
  {
    name: "Shaquille O'Neal",
    imageSrc: "/src/images/playerHeadshots/ONeal, Shaquille.png",
  },
  {
    name: "Robert Parish",
    imageSrc: "/src/images/playerHeadshots/Parish, Robert.png",
  },
  {
    name: "Chris Paul",
    imageSrc: "/src/images/playerHeadshots/Paul, Chris.png",
  },
  {
    name: "Gary Payton",
    imageSrc: "/src/images/playerHeadshots/Payton, Gary.png",
  },
  {
    name: "Bob Pettit",
    imageSrc: "/src/images/playerHeadshots/Pettit, Bob.png",
  },
  {
    name: "Paul Pierce",
    imageSrc: "/src/images/playerHeadshots/Pierce, Paul.png",
  },
  {
    name: "Scottie Pippen",
    imageSrc: "/src/images/playerHeadshots/Pippen, Scottie.png",
  },
  {
    name: "Willis Reed",
    imageSrc: "/src/images/playerHeadshots/Reed, Willis.png",
  },
  {
    name: "Oscar Robertson",
    imageSrc: "/src/images/playerHeadshots/Robertson, Oscar.png",
  },
  {
    name: "David Robinson",
    imageSrc: "/src/images/playerHeadshots/Robinson, David.png",
  },
  {
    name: "Dennis Rodman",
    imageSrc: "/src/images/playerHeadshots/Rodman, Dennis.png",
  },
  {
    name: "Bill Russell",
    imageSrc: "/src/images/playerHeadshots/Russell, Bill.png",
  },
  {
    name: "Dolph Schayes",
    imageSrc: "/src/images/playerHeadshots/Schayes, Dolph.png",
  },
  {
    name: "Bill Sharman",
    imageSrc: "/src/images/playerHeadshots/Sharman, Bill.png",
  },
  {
    name: "John Stockton",
    imageSrc: "/src/images/playerHeadshots/Stockton, John.png",
  },
  {
    name: "Isiah Thomas",
    imageSrc: "/src/images/playerHeadshots/Thomas, Isiah.png",
  },
  {
    name: "Nate Thurmond",
    imageSrc: "/src/images/playerHeadshots/Thurmond, Nate.png",
  },
  {
    name: "Wes Unseld",
    imageSrc: "/src/images/playerHeadshots/Unseld, Wes.png",
  },
  {
    name: "Dwyane Wade",
    imageSrc: "/src/images/playerHeadshots/Wade, Dwyane.png",
  },
  {
    name: "Bill Walton",
    imageSrc: "/src/images/playerHeadshots/Walton, Bill.png",
  },
  {
    name: "Jerry West",
    imageSrc: "/src/images/playerHeadshots/West, Jerry.png",
  },
  {
    name: "Russell Westbrook",
    imageSrc: "/src/images/playerHeadshots/Westbrook, Russell.png",
  },
  {
    name: "Lenny Wilkens",
    imageSrc: "/src/images/playerHeadshots/Wilkens, Lenny.png",
  },
  {
    name: "Dominique Wilkins",
    imageSrc: "/src/images/playerHeadshots/Wilkins, Dominique.png",
  },
  {
    name: "James Worthy",
    imageSrc: "/src/images/playerHeadshots/Worthy, James.png",
  },
];

export default playerObjs;
