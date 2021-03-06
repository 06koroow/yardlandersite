
if (typeof window === 'object') { 
    //check if document is loaded
    document.addEventListener("DOMContentLoaded", 
    () => {
        console.log('finishedLoading')        
    });
    

const mailingListForm = document.querySelector("#mailingListForm");
mailingListForm.addEventListener("submit", handleFormSubmit);


async function handleFormSubmit(event){
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;
    try{
        const formData = new formData(form);
        const responseData = await postFormDataAsJson({url, formData});
        console.log({responseData});
    } catch (error) {
        console.error(error);
    }
    }

    async function postFormDataAsJson({url,formData}){
     const plainFormData = Object.fromEntries(formData.entries());
   const formDataJsonString = JSON.stringify(plainFormData);  
     const fetchOptions = {
         method:"POST",
         headers:{
             "Content-Type": "application/json",
             "Accept" : "application/json"
         },
         body: formDataJsonString,
     };

     const response = await fetch(url, fetchOptions);
     if(!response.ok){
         const errorMessage = await response.text();
         throw new Error(errorMessage);
     }
     return response.json();
    }
}