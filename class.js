class Person {
    constructor(firstName, lastName, age,gender, country, city, mobile , mail , height , weight, qualification,company,dob,role) {
      this.firstName = firstName
      this.lastName = lastName
      this.dob = dob
      this.age = age
      this.Gender = gender
      this.country = country
      this.city = city
      this.mobile = mobile
      this.mail = mail
      this.height = height
      this.weight = weight
      this.qualification = qualification
      this.company = company
      this.role = role
      
    }
  }

  const result=new Person(hari,haran,23,male,Ind,Hosur,9597054639,hariharan23,5.6,50,be,nil,23/07/2000,dev);
  console.log(result);