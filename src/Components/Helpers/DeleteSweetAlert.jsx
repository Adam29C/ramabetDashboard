import Swal from "sweetalert2";

const DeleteSweetAlert = async (deleteApi, id, userId, getGameProviderList) => {
  const confirmResult = await Swal.fire({
    title: "Are you sure?",
    text: "You want to delete this!",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });

  if (confirmResult.isConfirmed) {
    try {
      let data = {
        adminId: userId,
        deleteId: id,
      };
      const res = await deleteApi(data);

      getGameProviderList();
      if (res.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: res?.message,
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "There was an issue deleting your data.",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an issue deleting your data.",
      });
    }
  }
};

export default DeleteSweetAlert