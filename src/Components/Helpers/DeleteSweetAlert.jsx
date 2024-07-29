import Swal from "sweetalert2";

const DeleteSweetAlert = async (
  deleteApi,
  id,
  getGameProviderList,
  userDeleteReason
) => {
  console.log(userDeleteReason);
  const userId = localStorage.getItem("userId");
  const swailConfig = userDeleteReason
    ? {
        icon: "warning",
        text: "Give Reason why are you delete this user ?",
        input: "text",
        inputPlaceholder: "Enter your reason",
        inputValidator: (value) => {
          if (!value) {
            return "Reason is required";
          }
        },
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it !",
      }
    : {
        title: "Are you sure?",
        text: "You want to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it !",
      };
  const confirmResult = await Swal.fire(swailConfig);

  if (confirmResult.isConfirmed) {
    try {
      const data = {
        adminId: userId,
        deleteId: id,
        ...(userDeleteReason && { reason: confirmResult.value }),
      };

      const res = await deleteApi(data);

      if (res.status === 200) {
        Swal.fire({
          title: "Deleted!",
          text: res?.message,
          icon: "success",
        });
        getGameProviderList();
      } else {
        Swal.fire({
          title: "Error!",
          text: res?.message || "There was an issue deleting your data.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an issue deleting your data.",
        icon: "error",
      });
    }
  }
};

export default DeleteSweetAlert;
