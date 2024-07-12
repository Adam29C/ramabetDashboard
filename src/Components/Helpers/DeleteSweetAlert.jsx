import React from 'react'
import Swal from 'sweetalert2';
const DeleteSweetAlert = ({title, onConfirm}) => {
    const showConfirmationDialog = () => {
        Swal.fire({
          title,
          text: "You won't be able to revert this!",
          icon: "warning",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "DELETE",
        }).then((result) => {
          if (result.isConfirmed) {
            onConfirm();
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        });
      };
    
      return <button onClick={showConfirmationDialog}>Delete</button>;
}

export default DeleteSweetAlert