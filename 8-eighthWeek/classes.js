class Student{

    constructor(sid, sfullName, sgrade){
       this.id = sid,
       this.fullName = sfullName,
       this.grade = sgrade
    }
   
    //  setDetails(sid, sfullName, sgrade){
    //    this.id = sid,
    //    this.fullName = sfullName,
    //    this.grade = sgrade
    // }

    displayInfo(){
        console.log(this.id, this.fullName, this.grade)
    }

}


let st = new Student(1, 'Kadir', 'B')//Object creation of the Student class

st.displayInfo()

st = new Student(2, 'Mike', 'C')
st.displayInfo()
// st.setDetails(25, 'Hakan', 'D')
// st.displayInfo()

// st.setDetails(34, 'Nina', 'B')
// st.displayInfo()

