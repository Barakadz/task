const Evaluation=()=>{
    return(
        <>
        <div className="p-4">
            <h3 className="text-center">Evaluation</h3>
        <div class="card" style={{width: "18rem !impoertant;",zIndex:'-1'}}>
   <div class="card-body">
    <h5 class="card-title projet-step">Merci de remplir cette formulaire, les idés de vous tojours</h5>

<form method="post" >
<div>
        <label for="rating">Note de l'application :</label>
        <select  class="form-select" aria-label="Default select example" required>
            <option value="1">1 - Très mauvais</option>
            <option value="2">2 - Mauvais</option>
            <option value="3">3 - Moyen</option>
            <option value="4">4 - Bon</option>
            <option value="5">5 - Excellent</option>
        </select>
    </div>
    <div>
        <label for="commentaires">Commentaires :</label>
        <textarea id="commentaires" name="commentaires" className="form-control" rows="4" required></textarea>
    </div>
    <div>
        <label for="suggestions">Suggestions :</label>
        <textarea id="suggestions" name="suggestions" rows="4" className="form-control"></textarea>
    </div>

</form>

<br/>

    <a href="#" class="btn btn-primary">Envoyer</a>
  </div>
</div>
            </div>
        </>
    )
}
export default Evaluation