import React from "react";
import PagesIndex from "../../PagesIndex";

const TeamMets = () => {
  const { getEmployeeListState } = PagesIndex.useSelector(
    (state) => state.SuperAdminSlice
  );
  console.log(getEmployeeListState);
  const dispatch = PagesIndex.useDispatch();
  const userId = localStorage.getItem("userId");

  PagesIndex.useEffect(() => {
    dispatch(PagesIndex.getEmployeeList(userId));
  }, []);

  const handleBlockEmployee = async (id) => {
    try {
      let data = {
        adminId: userId,
        empId: id,
      };

      const res = await PagesIndex.admin_services.BLOCK_EMPLOYEE_API(data);
      console.log(res);
      if (res?.status === 200) {
        PagesIndex.toast.success(res?.message);
        dispatch(PagesIndex.getEmployeeList(userId));
      } else {
        PagesIndex.toast.error(res?.message);
      }
    } catch (error) {
      PagesIndex.toast.error(error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="mb-5 text-center">RamaBets Games Team Members</h3>
        {getEmployeeListState &&
          getEmployeeListState?.map((row) => (
            <div>
              <div className="media media-reply">
                <img
                  className="circle-rounded"
                  src={PagesIndex.empLogo}
                  width={90}
                  height={50}
                  alt="Logo"
                />

                <div className="">
                  <h5 className="">{row?.employeeName}</h5>
                  <p>Rama Bets Employee</p>
                </div>

                <button
                  type="button"
                  onClick={() => handleBlockEmployee(row?._id)}
                  class={`btn ${row?.isBlock ? "btn-success" : "btn-danger"} `}
                >
                  {row?.isBlock ? "Unblock" : "Block"}
                </button>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamMets;
