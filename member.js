function skillsMember() {
  var skills = ["HTML", "CSS", "JS"];
  var member = {
    name: "John Doe",
    age: 34,
    skills: skills,
    address: {
      street: "123 Main St",
      city: "Miami",
      state: "FL"
    }
  };
  console.log(member);
  console.log(member.skills[0]);
  console.log(member.address.city);
  console.log(member["name"]);
  console.log(member["address"]["state"]);
}