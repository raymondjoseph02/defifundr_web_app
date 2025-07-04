import { Link } from "react-router-dom";
import { BackArrow, Mail, Phone, Location } from "../../../assets/svg/svg";
import Profile from "../../../assets/images/ProfilePic.png";
import ContractCard from "../../../components/dashboard/employees/ContractsCard";
import { RoutePaths } from "../../../routes/routesPath";

function EmployeeManagementDetails() {
  const dummyContracts = [
    {
      id: 1,
      title: "Insyder Website & Webapp Design",
      price: 6000,
      status: "active",
      startDate: "2022-10-25",
      endDate: "2022-11-25",
      rate: "fixed",
    },
    {
      id: 2,
      title: "Insyder Website & Webapp Design",
      price: 800,
      status: "completed",
      startDate: "2022-10-25",
      endDate: "2022-11-25",
      rate: "fixed",
    },
    {
      id: 3,
      title: "Insyder Website & Webapp Design",
      price: 1200,
      status: "active",
      startDate: "2022-10-25",
      endDate: "2022-11-25",
      rate: "fixed",
    },
  ] as const;

  return (
    <div className="min-h-full bg-gray-100 dark:bg-gray-500">
      <div className="p-4 mt-2 bg-white border-b dark:bg-gray-600 dark:border-gray-700 border-gray-150">
        <Link to={`${RoutePaths.TEAM_MANAGEMENT}`}>
          <button className="flex items-center gap-1 text-xs font-medium text-gray-300 cursor-pointer">
            <BackArrow /> Back
          </button>
        </Link>
        <p className="text-2xl font-bold text-gray-600 sm:text-4xl dark:text-gray-150">
          James Akinbiola
        </p>
      </div>
      <div className="p-6 mx-2 mt-2 bg-white rounded-lg sm:mx-4 max-w-max dark:bg-gray-600 sm:mt-4">
        <p className="text-sm font-medium text-gray-400 dark:text-gray-200">
          Personal Information
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex items-center justify-center overflow-hidden rounded-md size-14 bg-primary-500 dark:bg-gray-800">
            <img
              src={Profile}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-600 dark:text-gray-150">
              James Akinbiola
            </p>
            <div className="text-sm font-medium text-gray-600 dark:text-gray-150">
              <div className="flex flex-wrap items-center gap-y-2">
                <p className="flex items-center gap-1 mr-6">
                  <Mail />
                  mailjames@gmail.com
                </p>
                <p className="flex items-center gap-1">
                  <Phone />
                  +234 903 489 4238
                </p>
              </div>
              <p className="flex items-center gap-1">
                <Location />
                No 8 James Robertson Shittu/Ogunlana Drive, Surulere, Nigeria |
                142261
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm font-medium text-gray-400 dark:text-gray-200">
            Contracts
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {dummyContracts.map((contract) => (
              <ContractCard key={contract.id} {...contract} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeManagementDetails;
