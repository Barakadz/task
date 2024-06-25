const Contact=()=>{
    return(
        <>
        <div className="p-4">
            <h3 className="text-center">Contact</h3>
        <div class="card" style={{width: "18rem !impoertant;",zIndex:'-1'}}>
   <div class="card-body">
    <h5 class="card-title projet-step">Merci de remplir cette formulaire, La DSI est toujours la</h5>

<form method="post" >
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Problem : <b className="text-danger">*</b></label>
  <input type="email" class="form-control problem-step" id="exampleFormControlInput1" placeholder=""/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description : <b className="text-danger">*</b></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
</div>

</form>



    <a href="#" class="btn btn-primary">Envoyer</a>
  </div>
</div>
            </div>
        </>
    )
}

export default Contact;