import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AddGalButton from './addGalButton';


 

const AdminTache = () => {
  const [ImageGal, setImage] = useState('');
  const [TypeGal, setType] = useState('');
  const [IdGal, setId] = useState('');

  const [data, setData] = useState([]);

 const fetchData = async () => {
      try {
        //https://www.ehp-hasnaoui.com/api/galerie/
       
        const response = await axios.get('http://localhost:8800/api/tache/');  
        setData(response.data);
       } catch (error) {
        console.error('Error fetching data: ', error);
       }
    };
  useEffect(() => {
   
    fetchData();
  }, []);

   
 

  const columns = [
     { field: 'titre_tache', title: 'Titre de Tache' },
    { field: 'level', title: 'Level' },
   
    { field: 'date_debut', title: 'Date de Début' },
    { field: 'date_fin', title: 'Date de Fin' },
    { field: 'etat', title: 'Etat' },
 
    { field: 'validation', title: 'Validation', cellStyle: { backgroundColor: '#C4D600' }  },

    
   ];
 
   const handleAddUserClick = () => {
    // Logique pour afficher le modal
    const modal = document.getElementById('exampleModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  };

  const ModiyGalerie = (id,image,type) => {
    setImage(image)
    setType(type)
    setId(id)
      // Logique pour afficher le modal
    const modal = document.getElementById('exampleModall');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  };
  return (
    <> 
   
    
<AddGalButton/>

     <ToastContainer />    
    <MaterialTable
    title="La liste Des Taches :"
    columns={columns}
    data={data}
    options={{
      search: true,
      paging: true,
      filtering: true,
      exportButton: true, headerStyle: {
        backgroundColor: '#01579b',
        color: '#FFF'
      },
      actionsColumnIndex: -1,
 
    }} 

    actions={[
    /*  {
        icon: 'add',
        tooltip: 'Ajouter Tache',
        isFreeAction: true,
        onClick: handleAddUserClick,
      },*/
      {
        icon: 'refresh',
        tooltip: 'Actualiser',
        isFreeAction: true,
        onClick: () => fetchData(),
      }
      ,
      {
        icon: 'edit',
        tooltip: 'Modifier Tache',
        isFreeAction: false,
        onClick: (event, rowData) => ModiyGalerie(JSON.stringify(rowData.id),JSON.stringify(rowData.image),JSON.stringify(rowData.type)),
      } 
    ]}
   


    detailPanel={rowData => {
      return (<>
       <p><b>Description :</b></p> 
       <div
          dangerouslySetInnerHTML={{ __html: rowData.description }}
        />
         <p><b>Equipe :</b></p> 
       <div
          dangerouslySetInnerHTML={{ __html: rowData.equipe }}
        />
</>
      )
    }}

    editable={{
     
      
      onRowDelete: oldData =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);
           //id==> console.log(oldData.id)
           const id=oldData.id;
           //axios.delete(`https://www.ehp-hasnaoui.com/api/galerie/${id}`)

           axios.delete(`http://localhost:8800/api/tache/${id}`)
.then(response => {
toast.success(response.data)
})
.catch(error => {
toast.error(error)});
            resolve()
          }, 1000)
        }),
    }}

 

    localization={{
      body: {
          emptyDataSourceMessage: "Pas d'enregistreent à afficher",
          addTooltip: 'Ajouter',
          deleteTooltip: 'Supprimer',
          editTooltip: 'Editer',
          filterRow: {
              filterTooltip: 'Filtrer'
          },
          editRow: {
              deleteText: 'Voulez-vous supprimer cette Tache?',
              cancelTooltip: 'Annuler',
              saveTooltip: 'Enregistrer'
          }
      },
      grouping: {
          placeholder: "Tirer l'entête ...",
          groupedBy: 'Grouper par:'
      },
      header: {
          actions: 'Actions'
      },
      pagination: {
          labelDisplayedRows: '{from}-{to} de {count}',
          labelRowsSelect: 'lignes',
          labelRowsPerPage: 'lignes par page:',
          firstAriaLabel: 'Première page',
          firstTooltip: 'Première page',
          previousAriaLabel: 'Page précédente',
          previousTooltip: 'Page précédente',
          nextAriaLabel: 'Page suivante',
          nextTooltip: 'Page suivante',
          lastAriaLabel: 'Dernière page',
          lastTooltip: 'Dernière page'
      },
      toolbar: {
          addRemoveColumns: 'Ajouter ou supprimer des colonnes',
          nRowsSelected: '{0} ligne(s) sélectionée(s)',
          showColumnsTitle: 'Voir les colonnes',
          showColumnsAriaLabel: 'Voir les colonnes',
          exportTitle: 'Exporter',
          exportAriaLabel: 'Exporter',
          exportName: 'Exporter en CSV',
          searchTooltip: 'Recherche',
          searchPlaceholder: 'Recherche'
      }
  }}


  
    
    // Pass the theme object to the MaterialTable component
    />        
    </>
  );
};

export default AdminTache;






 