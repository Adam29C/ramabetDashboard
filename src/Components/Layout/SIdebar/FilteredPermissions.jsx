export const filterSidebarItems = (items, role, getPermissions) => {
  return items.filter((data) => {
    if (role === "ADMIN") return true;
    if (data.title === "Dashboard" && !getPermissions?.permission?.isDashboard)
      return false;

    if (data.title === "Users" && !getPermissions?.permission?.isUsers)
      return false;
    if (
      data.title === "Available Games" &&
      !getPermissions?.permission?.isGames
    )
      return false;
    if (data.title === "Starline" && !getPermissions?.permission?.isStarline)
      return false;
    if (data.title === "Jackpot" && !getPermissions?.permission?.isAndarBahar)
      return false;

    if (data.title === "Penal Info" && role !== "ADMIN") return false;
    if (data.title === "Employee" && role !== "ADMIN") return false;

    if (
      data.title === "Cutting Group" &&
      
      !getPermissions?.permission?.isCuttingGroup
    )
      return false;
    if (
      data.title === "Bookie Corner" &&
      !getPermissions?.permission?.isBookieCorner
    )
      return false;
    if (data.title === "Wallet" && !getPermissions?.permission?.isWallet)
      return false;
    if (
      data.title === "Credit Request (UPI)" &&
      !getPermissions?.permission?.isCreditRequest
    )
      return false;
    if (
      data.title === "Approved Debit Requests" &&
      !getPermissions?.permission?.isApprovedDebitPage
    )
      return false;
    if (
      data.title === "Pending Debit Requests" &&
      !getPermissions?.permission?.isPendingDebitRequest
    )
      return false;
    if (
      data.title === "Declined Request" &&
      !getPermissions?.permission?.isDeclinedRequest
    )
      return false;
    if (data.title === "Reports" && !getPermissions?.permission?.isReports)
      return false;
    if (
      data.title === "Notification" &&
      !getPermissions?.permission?.isNotification
    )
      return false;
    if (data.title === "News" && !getPermissions?.permission?.isNews)
      return false;
    if (
      data.title === "Deleted User" &&
      !getPermissions?.permission?.isDeletedUsers
    )
      return false;
    if (data.title === "Reports" && !getPermissions?.permission?.isReports)
      return false;
    if (data.title === "Reports" && !getPermissions?.permission?.isReports)
      return false;
    if (
      data.title === "App Settings" &&
      !getPermissions?.permission?.isAppSettings
    )
      return false;
    if (data.title === "Masters" && !getPermissions?.permission?.isMasters)
      return false;
    return true;

  });
};

export const filterNestedItems = (nestedItems,role, getPermissions) => {
  return nestedItems.filter((nested) => {
    if (role === "ADMIN") {
      return true;
    }
    if (
      nested.title === "Game Provider" &&
      !getPermissions?.permission?.isGamesProvider
    )
      return false;
    if (
      nested.title === "Games Setting" &&
      !getPermissions?.permission?.isGamesSetting
    )
      return false;
    if (
      nested.title === "Game Rates" &&
      !getPermissions?.permission?.isGamesRates
    )
      return false;
    if (
      nested.title === "Game Result" &&
      !getPermissions?.permission?.isGamesResult
    )
      return false;
    if (
      nested.title === "Revert Result Payment" &&
      !getPermissions?.permission?.isGamesRevert
    )
      return false;
    if (
      nested.title === "Refund User Points" &&
      !getPermissions?.permission?.isGamesRefund
    )
      return false;
    if (
      nested.title === "Star Game Provider" &&
      !getPermissions?.permission?.isStarlineProvider
    )
      return false;
    if (
      nested.title === "Star Games Setting" &&
      !getPermissions?.permission?.isStarlineSetting
    )
      return false;
    if (
      nested.title === "Star Game Rates" &&
      !getPermissions?.permission?.isStarlineRates
    )
      return false;
    if (
      nested.title === "Star Game Result" &&
      !getPermissions?.permission?.isStarlineResult
    )
      return false;
    if (
      nested.title === "Star Revert Result Payment" &&
      !getPermissions?.permission?.isStarlineRevert
    )
      return false;
    if (
      nested.title === "Refund User Points" &&
      !getPermissions?.permission?.isStarlineRefund
    )
      return false;
    if (
      nested.title === "Jackpot Game Provider" &&
      !getPermissions?.permission?.isAndarBaharProvider
    )
      return false;
    if (
      nested.title === "Jackpot Games Setting" &&
      !getPermissions?.permission?.isAndarBaharSetting
    )
      return false;
    if (
      nested.title === "Jackpot Game Rates" &&
      !getPermissions?.permission?.isAndarBaharRates
    )
      return false;
    if (
      nested.title === "Jackpot Game Result" &&
      !getPermissions?.permission?.isAndarBaharResult
    )
      return false;
    if (
      nested.title === "Jackpot Revert Result Payment" &&
      !getPermissions?.permission?.isAndarBaharRevert
    )
      return false;
    if (
      nested.title === "Refund User Points" &&
      !getPermissions?.permission?.isAndarBaharRefund
    )
      return false;
    if (
      nested.title === "OC Cutting Group" &&
      !getPermissions?.permission?.isOCCuttingGroup
    )
      return false;
    if (
      nested.title === "Final OC Cutting Group" &&
      !getPermissions?.permission?.isFinalCuttingGroup
    )
      return false;
    if (
      nested.title === "Manual Request" &&
      !getPermissions?.permission?.isFundRequest
    )
      return false;
    if (
      nested.title === "Export Debit Report" &&
      !getPermissions?.permission?.isExportDebitReport
    )
      return false;
    if (
      nested.title === "View Wallet" &&
      !getPermissions?.permission?.isViewWallet
    )
      return false;
    if (
      nested.title === "Requests On/Off" &&
      !getPermissions?.permission?.isRequestON / OFF
    )
      return false;

    return true;

  });
};
