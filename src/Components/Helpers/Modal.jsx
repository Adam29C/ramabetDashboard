import React from 'react'
import PagesIndex from '../Pages/PagesIndex';

const Modal = async() => {

  const confirmResult = await Swal.fire({
    title: "Submit your Github username",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
  //   preConfirm: async (login) => {
  //     try {
  //       const githubUrl = `
  //         https://api.github.com/users/${login}
  //       `;
  //       const response = await fetch(githubUrl);
  //       if (!response.ok) {
  //         return Swal.showValidationMessage(`
  //           ${JSON.stringify(await response.json())}
  //         `);
  //       }
  //       return response.json();
  //     } catch (error) {
  //       Swal.showValidationMessage(`
  //         Request failed: ${error}
  //       `);
  //     }
  //   },
  //   allowOutsideClick: () => !Swal.isLoading()
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     Swal.fire({
  //       title: `${result.value.login}'s avatar`,
  //       imageUrl: result.value.avatar_url
  //     });
  //   }
  
  });
  // if (confirmResult.isConfirmed) {
  //   try {
  //     let data = {
  //       adminId: userId,
  //       deleteId: id,
  //     };
  //     const res = await deleteApi(data);

  //     getGameProviderList();
  //     if (res.status === 200) {
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: res?.message,
  //       });
  //     } else {
  //       Swal.fire({
  //         title: "Error!",
  //         text: "There was an issue deleting your data.",
  //       });
  //     }
  //   } catch (error) {
  //     Swal.fire({
  //       title: "Error!",
  //       text: "There was an issue deleting your data.",
  //     });
  //   }
  // }

}

export default Modal