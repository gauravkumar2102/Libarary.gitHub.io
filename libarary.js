console.log("All okay");
show();
console.log(document.getElementById("name"));

class book{
    constructor(name,author,type){
        this.name = name;
        this.author=author;
        this.type1 = type;
    }
}

//Display Class Definition

class Display{

   

    
    
}

// let man=new book("Anshu","Singh","programing");
// console.log(man);

let button=document.getElementById("submit");
button.addEventListener("click",GetDetails);
console.log(button);
function GetDetails(e){
    
    console.log("Shii Chal rha hai");

    let Name=document.getElementById("name").value;
    let author=document.getElementById("author").value;

    let type="";
    let fiction=document.getElementById("Fiction");
    let motivational=document.getElementById("Motivational");
    let programing=document.getElementById("Programing");
    let cooking=document.getElementById("Cooking");

    if(fiction.checked){
        type=fiction.value;
    }
   else if(motivational.checked){
        type=motivational.value;
    }
   else if(programing.checked){
        type=programing.value;
    }
    else if(cooking.checked){
        type=cooking.value;
    }

    console.log(type);

    let Book=new book(Name,author,type);
    console.log(Book);


    let item=localStorage.getItem("MyBooks");
        if(item==null){Library=[];}
        else{Library=JSON.parse(item);}
        
        Library.push(Book);
        localStorage.setItem("MyBooks",JSON.stringify(Library));
        console.log(Library);
        console.log(typeof(Library));
        let display=new Display();
    // display.add(Book);
    // display.show();
    show();
     let form=document.getElementById("formheading");
     form.reset();
    e.preventDefault();
    
}
  

// Show Function

function show(){

    let table=document.getElementById("TableBody");
    table.innerHTML="";
    let item=localStorage.getItem("MyBooks");
    if(item==null){Library1=[];}
    else{
        
        Library1=JSON.parse(item);
    
    }
    
    let HTML="";
    Library1.forEach(function(Element,index){
        HTML +=` <tr>
        <td>${Element.name}</td>
        <td>${Element.author}</td>
        <td>${Element.type1}</td>
        <td> <button type="click" class="btn btn-primary" id="${index}" onclick="Delete(this.id)" style="margin-top:15px">Delete</button></td>
      </tr>
        `
        // table.innerHTML += HTML;
    });
      if(Library1.length !=null){
               table.innerHTML += HTML;
      }
      else{
          table.innerHTML=`<h1>Table Is Empty</h1>`;
      }
}


function  Delete(index){
      console.log("Delete", index);
       let Item=localStorage.getItem("MyBooks");
       if(Item==null)
       {
           Libarary=[];
       }
       else{
           Library=JSON.parse(Item);
    }

    Library.splice(index,1);
    localStorage.setItem("MyBooks",JSON.stringify(Library));
    show();
}







