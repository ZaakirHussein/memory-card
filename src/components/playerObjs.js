const playerObjs = [
  {
    name: "Kareem Abdul-Jabbar",
    imageSrc: "Abdul-Jabbar, Kareem.png",
    id: "a9c35548-08c8-440f-8c80-55dcae609379",
  },
  {
    name: "Ray Allen",
    imageSrc: "Allen, Ray.png",
    id: "01d23a9d-dc1d-4827-a9f6-8b63566a7ef5",
  },
  {
    name: "Giannis Antetokounmpo",
    imageSrc: "Antetokounmpo, Giannis.png",
    id: "25c97543-3ee8-43d4-963b-2c8c62e3aa9d",
  },
  {
    name: "Carmelo Anthony",
    imageSrc: "Anthony, Carmelo.png",
    id: "900ad182-6f05-4d69-ba07-b80a64a1150f",
  },
  {
    name: "Nate Archibald",
    imageSrc: "Archibald, Nate.png",
    id: "44eefe90-1871-49d1-8fbe-d765ab462f4b",
  },
  {
    name: "Paul Arizin",
    imageSrc: "Arizin, Paul.png",
    id: "00ac9876-2303-448d-a66a-449a888b73bf",
  },
  {
    name: "Charles Barkley",
    imageSrc: "Barkley, Charles.png",
    id: "c6e3f8d3-7e16-4bd0-afc6-f584ebf61e9b",
  },
  {
    name: "Rick Barry",
    imageSrc: "Barry, Rick.png",
    id: "7dd2a63f-383e-456e-9e6e-625420ed2e33",
  },
  {
    name: "Elgin Baylor",
    imageSrc: "Baylor, Elgin.png",
    id: "360e5b58-3bc5-4745-b25e-11588c850b14",
  },
  {
    name: "Dave Bing",
    imageSrc: "Bing, Dave.png",
    id: "c3a6b72c-6682-49c0-a3bd-e50ae724275f",
  },
  {
    name: "Larry Bird",
    imageSrc: "Bird, Larry.png",
    id: "e847f4f0-c7fb-411f-8ebf-dc80a8cafb9d",
  },
  {
    name: "Kobe Bryant",
    imageSrc: "Bryant, Kobe.png",
    id: "32ecae90-f7bb-43e6-897e-1c1fbbffdd37",
  },
  {
    name: "Wilt Chamberlain",
    imageSrc: "Chamberlain, Wilt.png",
    id: "99e898cb-4a7f-4a03-83a7-582e356709eb",
  },
  {
    name: "Bob Cousy",
    imageSrc: "Cousy, Bob.png",
    id: "ef571b00-c18d-4eca-8736-17018baf959b",
  },
  {
    name: "Dave Cowens",
    imageSrc: "Cowens, Dave.png",
    id: "db8dd01b-6435-406e-b296-3de9c81b21b8",
  },
  {
    name: "Billy Cunningham",
    imageSrc: "Cunningham, Billy.png",
    id: "a128b6a7-d806-43f7-90bb-b8021afd8b41",
  },
  {
    name: "Stephen Curry",
    imageSrc: "Curry, Stephen.png",
    id: "ac08477d-ead5-4a1e-9332-ea323cb73af3",
  },
  {
    name: "Anthony Davis",
    imageSrc: "Davis, Anthony.png",
    id: "8a0f0526-a0c3-4fae-afa6-7e7381bed32e",
  },
  {
    name: "Dave DeBusschere",
    imageSrc: "DeBusschere, Dave.png",
    id: "2928ca46-4a1a-47c4-aac9-c66eb302e5bc",
  },
  {
    name: "Clyde Drexler",
    imageSrc: "Drexler, Clyde.png",
    id: "48daee74-e3b0-44a2-bc35-da3058910ca4",
  },
  {
    name: "Tim Duncan",
    imageSrc: "Duncan, Tim.png",
    id: "5f963c6e-527c-4028-8a99-5f4d3aedfc28",
  },
  {
    name: "Kevin Durant",
    imageSrc: "Durant, Kevin.png",
    id: "fc0cccf8-8ca1-4438-8dc6-5c7f70d3bdec",
  },
  {
    name: "Julius Erving",
    imageSrc: "Erving, Julius.png",
    id: "cd6e5674-41fe-460a-ace9-bc23e519ecbe",
  },
  {
    name: "Patrick Ewing",
    imageSrc: "Ewing, Patrick.png",
    id: "6e1df4cf-17d0-4332-82a6-d0f5b37c6cf6",
  },
  {
    name: "Walt Frazier",
    imageSrc: "Frazier, Walt.png",
    id: "09c890e2-8554-4dac-a1db-fa4fa756c9ec",
  },
  {
    name: "Kevin Garnett",
    imageSrc: "Garnett, Kevin.png",
    id: "65e2ed24-1740-42e8-87ed-7c0576e58b2e",
  },
  {
    name: "George Gervin",
    imageSrc: "Gervin, George.png",
    id: "53704bfe-398f-48db-99c5-ec676af5d6b1",
  },
  {
    name: "Hal Greer",
    imageSrc: "Greer, Hal.png",
    id: "0f1e02b8-269f-47b0-ab37-925e53684cc1",
  },
  {
    name: "James Harden",
    imageSrc: "Harden, James.png",
    id: "7058081d-7df5-4ed8-8410-deccf52c3ac7",
  },
  {
    name: "John Havlicek",
    imageSrc: "Havlicek, John.png",
    id: "3ab1e464-5c91-4432-b7b8-cf1d4c46fc46",
  },
  {
    name: "Elvin Hayes",
    imageSrc: "Hayes, Elvin.png",
    id: "8cd076dd-8e1c-4cfb-9127-34649a035fd9",
  },
  {
    name: "Allen Iverson",
    imageSrc: "Iverson, Allen.png",
    id: "b4c98711-ac2a-4583-93d8-4a337fb99bc1",
  },
  {
    name: "LeBron James",
    imageSrc: "James, LeBron.png",
    id: "12614b1d-1d49-42cd-a77f-d00ab15e08b8",
  },
  {
    name: "Magic Johnson",
    imageSrc: "Johnson, Magic.png",
    id: "d27e7ad1-ad28-4f85-b41a-e41295fffec4",
  },
  {
    name: "Sam Jones",
    imageSrc: "Jones, Sam.png",
    id: "54934299-4fc7-4570-9217-33f79c1ebeac",
  },
  {
    name: "Michael Jordan",
    imageSrc: "Jordan, Michael.png",
    id: "7770bdb7-f730-47b2-aaa6-4965c0de35ae",
  },
  {
    name: "Jason Kidd",
    imageSrc: "Kidd, Jason.png",
    id: "2090650b-4b1f-4885-bcd3-55dd6219d40d",
  },
  {
    name: "Kawhi Leonard",
    imageSrc: "Leonard, Kawhi.png",
    id: "9b9d2ac4-9f3c-4cf0-a608-27f2c9d3712f",
  },
  {
    name: "Damian Lillard",
    imageSrc: "Lillard, Damian.png",
    id: "13992d6d-2598-43a8-bac8-0cd5eb028785",
  },
  {
    name: "Jerry Lucas",
    imageSrc: "Lucas, Jerry.png",
    id: "dbf81312-6f92-46f4-8ecf-85cb76700a74",
  },
  {
    name: "Karl Malone",
    imageSrc: "Malone, Karl.png",
    id: "de605dd7-47b7-4792-a547-5575a7c87c72",
  },
  {
    name: "Moses Malone",
    imageSrc: "Malone, Moses.png",
    id: "20bf8f20-96e0-43b1-80ce-84c73890d33c",
  },
  {
    name: "Pete Maravich",
    imageSrc: "Maravich, Pete.png",
    id: "0dd59f4b-a25b-4b22-9225-48b4e7da6f31",
  },
  {
    name: "Bob McAdoo",
    imageSrc: "McAdoo, Bob.png",
    id: "eda36e7b-04d6-49ea-8aa8-c258779e0004",
  },
  {
    name: "Kevin McHale",
    imageSrc: "McHale, Kevin.png",
    id: "fdecd766-5136-4ea8-9803-342c1b55dad7",
  },
  {
    name: "George Mikan",
    imageSrc: "Mikan, George.png",
    id: "1b801d5a-122f-4eb7-a878-88ba805c7239",
  },
  {
    name: "Reggie Miller",
    imageSrc: "Miller, Reggie.png",
    id: "a00a5380-8b51-4713-99b8-e5738b376fa4",
  },
  {
    name: "Earl Monroe",
    imageSrc: "Monroe, Earl.png",
    id: "e233d5a9-f8bb-4204-8bd0-c85ddca43e44",
  },
  {
    name: "Steve Nash",
    imageSrc: "Nash, Steve.png",
    id: "dfa6f869-763f-4bf3-9c62-d256fd52f0b3",
  },
  {
    name: "Dirk Nowitzki",
    imageSrc: "Nowitzki, Dirk.png",
    id: "4f41f173-f353-4ce0-aaff-fc0700e6f0b6",
  },
  {
    name: "Hakeem Olajuwon",
    imageSrc: "Olajuwon, Hakeem.png",
    id: "672344aa-3d4a-492c-9147-4a571040d591",
  },
  {
    name: "Shaquille O'Neal",
    imageSrc: "ONeal, Shaquille.png",
    id: "8ce2e570-7a22-4883-b5e0-d5f4a91e7420",
  },
  {
    name: "Robert Parish",
    imageSrc: "Parish, Robert.png",
    id: "c15674df-9c6f-4d82-9505-e9dbcac48ac9",
  },
  {
    name: "Chris Paul",
    imageSrc: "Paul, Chris.png",
    id: "d724f0d8-a3e2-470f-9717-85d6a9af1374",
  },
  {
    name: "Gary Payton",
    imageSrc: "Payton, Gary.png",
    id: "9abbbbc0-3155-47ae-acff-2cbe80813b3c",
  },
  {
    name: "Bob Pettit",
    imageSrc: "Pettit, Bob.png",
    id: "c7c011aa-7403-455a-942b-b1554c1b50f8",
  },
  {
    name: "Paul Pierce",
    imageSrc: "Pierce, Paul.png",
    id: "1a85a688-5016-467e-ab27-d86af0cedb85",
  },
  {
    name: "Scottie Pippen",
    imageSrc: "Pippen, Scottie.png",
    id: "30426f03-60f4-4b2a-850b-16a4c4703af2",
  },
  {
    name: "Willis Reed",
    imageSrc: "Reed, Willis.png",
    id: "12529fad-bab9-4155-bc62-bbf09942b8a2",
  },
  {
    name: "Oscar Robertson",
    imageSrc: "Robertson, Oscar.png",
    id: "f73ebbe6-e3bf-476a-a783-fdb9904acef2",
  },
  {
    name: "David Robinson",
    imageSrc: "Robinson, David.png",
    id: "d8d90181-0e0a-46a7-afaa-040175f82b1a",
  },
  {
    name: "Dennis Rodman",
    imageSrc: "Rodman, Dennis.png",
    id: "e59938e6-187c-4f5a-a4d3-ca6da3ff5a84",
  },
  {
    name: "Bill Russell",
    imageSrc: "Russell, Bill.png",
    id: "e1a00715-e64a-47c3-87a4-b970596d9ed1",
  },
  {
    name: "Dolph Schayes",
    imageSrc: "Schayes, Dolph.png",
    id: "272d0b9c-b921-4e86-914d-adf3f4404c96",
  },
  {
    name: "Bill Sharman",
    imageSrc: "Sharman, Bill.png",
    id: "f8393be5-5d39-4662-a058-6862aacb0fb2",
  },
  {
    name: "John Stockton",
    imageSrc: "Stockton, John.png",
    id: "ff7949c1-8c56-404a-8982-4f4fc4d534d5",
  },
  {
    name: "Isiah Thomas",
    imageSrc: "Thomas, Isiah.png",
    id: "9e6660da-e744-4c80-afc5-71458d39515a",
  },
  {
    name: "Nate Thurmond",
    imageSrc: "Thurmond, Nate.png",
    id: "d3c0922f-bc5d-489d-9589-64d62c5e0198",
  },
  {
    name: "Wes Unseld",
    imageSrc: "Unseld, Wes.png",
    id: "fb5adb76-e547-40a9-9be7-f06213380f01",
  },
  {
    name: "Dwyane Wade",
    imageSrc: "Wade, Dwyane.png",
    id: "a2ac4ddb-a9da-4faa-ba61-508d10182f3e",
  },
  {
    name: "Bill Walton",
    imageSrc: "Walton, Bill.png",
    id: "608044b0-0521-437b-813b-d57ae4503893",
  },
  {
    name: "Jerry West",
    imageSrc: "West, Jerry.png",
    id: "b78620d0-448c-457e-b084-b934aa43dfbe",
  },
  {
    name: "Russell Westbrook",
    imageSrc: "Westbrook, Russell.png",
    id: "d251ed79-ab33-4973-aef1-6a46111b6286",
  },
  {
    name: "Lenny Wilkens",
    imageSrc: "Wilkens, Lenny.png",
    id: "10b2dfd4-79a8-495a-a0bc-e04407882a15",
  },
  {
    name: "Dominique Wilkins",
    imageSrc: "Wilkins, Dominique.png",
    id: "9ad9ee96-b622-452c-824a-fefcb09860ca",
  },
  {
    name: "James Worthy",
    imageSrc: "Worthy, James.png",
    id: "07e22811-e057-4cf6-857a-eada0428a80d",
  },
];

export default playerObjs;
