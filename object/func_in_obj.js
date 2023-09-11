let person={
    firstName : "Adhi",
    LastName : "Adithya",
    fullName: function()
    {
        return this.firstName+ " " + this.LastName;
    }
}
console.log(person.fullName());