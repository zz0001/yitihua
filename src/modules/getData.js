import fetch from '../config/fetch.js'

let pageSize = 15;

/**
 *  公共页面接口
 */

// 加载全部数据字典
export const getAllDataDictionary = () => fetch('get', 'app/common/doAppLogin', {}, false);

// 登录
export const loginApp = (loginId, passWord) => fetch('post', '/app/common/doAppLogin', {
    loginId: loginId,
    password: passWord
});

// 获取数据字典
export const getDicValue = (dictCodeValue) => fetch('get', '/app/common/getDicValue', {
    dictCode: dictCodeValue
});

// 获取当事人列表
export const queryCurPersons = (curPersonName, page, size) => fetch('get', '/app/common/queryCurPersons', {
    curPersonName: curPersonName,
    page: page,
    size: size
});
//上报选择当事人(公民）
export const saveCurPerson = (name, sex, age, idType, idNum, mobile, address, workUnit) => fetch('post', '/app/common/saveCurPerson', {
    typeTotal: 2,
    userId: localStorage.getItem('userId'),
    name: name,
    sex: sex,
    age: age,
    idType: idType,
    idNum: idNum,
    mobile: mobile,
    address: address,
    workUnit: workUnit,
});
//上报选择当事人(法人）
export const saveCurPerson1 = (name, type, creditCode, address, telephone, header, position, idType, idNum, sex, age, headerAddress, mobile) => fetch('post', '/app/common/saveCurPerson', {
    typeTotal: 1,
    userId: localStorage.getItem('userId'),
    name: name,
    type: type,
    creditCode: creditCode,
    address: address,
    telephone: telephone,
    header: header,
    position: position,
    idType: idType,
    idNum: idNum,
    sex: sex,
    age: age,
    headerAddress: headerAddress,
    mobile: mobile
});

//案件上报接口
export const doAppSaveCase = (userId, areaId, caseOrigin, caseType, curPerson, curPersonName,
                              longitude, latitude, caseTime, location, caseDescribe, annexNo) => fetch('post', '/app/case/doAppSaveCase', {
    userId: userId,
    areaId: areaId,
    caseOrigin: caseOrigin,
    caseType: caseType,
    curPerson: curPerson,
    curPersonName: curPersonName,
    longitude: longitude,
    latitude: latitude,
    caseTime: caseTime,
    location: location,
    caseDescribe: caseDescribe,
    annexNo: annexNo
});

//获取案由
export const findStandardByName = (name) => fetch('get', '/app/common/findStandardByName', {
    name: name,
});

//根据案由获取处罚依据和决定
export const findStandardByCase = (id) => fetch('get', '/app/common/findStandardByCase', {
    id: id,
});

//获取待办案件列表接口
export const getMyAppCaseList = (page, size) => fetch('get', '/app/case/getAppMyCaseList', {
    page: page,
    size: size
});

//获取案件详情
export const getAppCaseInfo = (caseInfoId) => fetch('get', '/app/case/getAppCaseInfo', {
    caseInfoId: caseInfoId
});

//工作流运行
export const getAppInspectionView = (contentJson, result, caseInfoId, dutyUserId, annexNo) => fetch('post', '/app/case/saveProcess', {
    contentJson: contentJson,
    result: result,
    caseInfoId: caseInfoId,
    dutyUserId: dutyUserId,
    annexNo: annexNo,
});
//违停上报
export const doAppillegalParkingReport = (illNo, happendTime, uploadUser, carNo, carStyle,
                                          carcolor, carAddress, carDescrib, annexNo, userId) => fetch('post', '/app/illegalpark/doAppSavePark',
    {
        illNo: illNo,
        happendTime: happendTime,
        uploadUser: uploadUser,
        carNo: carNo,
        carStyle: carStyle,
        carcolor: carcolor,
        carAddress: carAddress,
        carDescrib: carDescrib,
        annexNo: annexNo,
        userId: userId
    }
);

//简易案件上报接口
export const doAppSaveSimpleCase = (userId, caseOrigin, caseType, curPerson, caseTime,
                                    longitude, latitude, location, caseReason, caseReasonStr, punishmentBasis
    , penaltyDecision, caseSummary, caseOrganizer, sendTimeStart, sendTimeEnd, annexNo) => fetch('post', '/app/simplecase/doAppSaveSimpleCase', {
    userId: userId,
    caseOrigin: caseOrigin,
    caseType: caseType,
    curPerson: curPerson,
    caseTime: caseTime,
    longitude: longitude,
    latitude: latitude,
    location: location,
    caseReason: caseReason,
    caseReasonStr: caseReasonStr,
    punishmentBasis: punishmentBasis,
    penaltyDecision: penaltyDecision,
    caseSummary: caseSummary,
    caseOrganizer: caseOrganizer,
    sendTimeStart: sendTimeStart,
    sendTimeEnd: sendTimeEnd,
    annexNo: annexNo
});

//简易案件列表接口
export const queryAppSimpleCaseList = (userId, caseOrigin, caseType, curPersonName, curPerson, caseTime,
                                       longitude, latitude, location, caseReason, caseReasonStr, punishmentBasis
    , penaltyDecision, caseSummary, caseOrganizer, sendTimeStart, sendTimeEnd, annexNo) => fetch('post', '/app/simplecase/queryAppSimpleCaseList', {
    userId: userId,
    caseOrigin: caseOrigin,
    caseType: caseType,
    curPersonName: curPersonName,
    curPerson: curPerson,
    caseTime: caseTime,
    longitude: longitude,
    latitude: latitude,
    location: location,
    caseReason: caseReason,
    caseReasonStr: caseReasonStr,
    punishmentBasis: punishmentBasis,
    penaltyDecision: penaltyDecision,
    caseSummary: caseSummary,
    caseOrganizer: caseOrganizer,
    sendTimeStart: sendTimeStart,
    sendTimeEnd: sendTimeEnd,
    annexNo: annexNo
});

//简易程序案件案件详情
export const getSimpleCaseInfo = (caseId) => fetch('get', '/app/simplecase/getSimpleCaseInfo', {
    id: caseId,
});

//获取一般案件列表接口
export const getAppCaseList = (page, size, caseOrigin, caseType, sendTimeStart, sendTimeEnd, filterStr) => fetch('get', '/app/case/getAppCaseList', {
    page: page,
    size: size,
    caseOrigin: caseOrigin,
    caseType: caseType,
    startTime: sendTimeStart,
    endTime: sendTimeEnd,
    caseNo: filterStr

});
//获取台账列表接口
export const getAppMyDoneCaseList = (page, size, caseOrigin, caseType, sendTimeStart, sendTimeEnd, filterStr) => fetch('get', '/app/case/getAppMyDoneCaseList', {
    page: page,
    size: size,
    caseOrigin: caseOrigin,
    caseType: caseType,
    startTime: sendTimeStart,
    endTime: sendTimeEnd,
    caseNo: filterStr

});
//违建上报
export const doAppSaveBuild = (userId, curPerson, telNumber, connectAddress,
                               happenTime, floorSpace, punishContent, punishDeNumber, punishTime, annexNo) => fetch('post', '/app/illegalbuild/doAppSaveBuild', {
    userId: userId,
    curPerson: curPerson,
    telNumber: telNumber,
    connectAddress: connectAddress,
    happendTime: happenTime,
    floorSpace: floorSpace,
    punishContent: punishContent,
    punishDeNumber: punishDeNumber,
    punishTime: punishTime,
    annexNo: annexNo
});
//违停上报
// export const doAppSavePark = (userId, illNo, happenTime, uploadUser,
//                               carNo, carStyle, carcolor, carAddress, carDescrib, annexNo) => fetch('post', '/app/illegalpark/doAppSavePark', {
//     userId: userId,
//     illNo: illNo,
//     happenTime: happenTime,
//     uploadUser:uploadUser,
//     carNo: carNo,
//     carStyle: carStyle,
//     carcolor: carcolor,
//     carAddress: carAddress,
//     carDescrib: carDescrib,
//     annexNo: annexNo
// });
//人员选择
export const getApprover = () => fetch('POST', '/app/common/getAppUserTree', {});
//区域选择
export const getAppAreaTree = () => fetch('POST', '/app/common/getAppAreaTree', {});


//////////////////////////////////事件//////////////////////////////////
export const uploadEvent = (userid, eventsLevel, eventsTypeOne, eventsTypeTwo, resolveSelf, eventsDescribe, picAnnexNo, eventsPlace, eventsLongitude, eventsLatitude) => fetch('GET', '/app/events/eventsReport', {
    userid: userid,
    eventsLevel: eventsLevel,
    eventsTypeOne: eventsTypeOne,
    eventsTypeTwo: eventsTypeTwo,
    resolveSelf: resolveSelf,
    eventsDescribe: eventsDescribe,
    picAnnexNo: picAnnexNo,
    eventsPlace: eventsPlace,
    eventsLongitude: eventsLongitude,
    eventsLatitude: eventsLatitude,
});

export const getEventLevel = (dictCode) => fetch('GET', '/app/common/getDicValue', {
    dictCode: dictCode,
}, false);

export const getEventType = (dataFieldName, dataLinkId, isLink, dt) => fetch('GET', '/getDataLink', {
    dataFieldName: dataFieldName,
    dataLinkId: dataLinkId,
    isLink: isLink,
    dt: dt,
}, false);

export const getEventList = (eventsLevel, eventsTypeOne, eventsTypeTwo, status, pubStartTime, pubEndTime, pageNumber) => fetch('POST', '/app/events/eventsAccountList', {
    userid: localStorage.getItem('userId'),
    eventsLevel: eventsLevel,
    eventsTypeOne: eventsTypeOne,
    eventsTypeTwo: eventsTypeTwo,
    status: status,
    pubStartTime: pubStartTime,
    pubEndTime: pubEndTime,
    pageSize: pageSize,
    pageNumber: pageNumber,
});
//数据中心-案件查询
export const getAppCaseQuery = (page, size, caseNo, caseOrigin, caseType, curPerson, startTime, endTime, areaId, caseReason) => fetch('get', '/app/datacenter/getAppCaseQuery', {
    page: page,
    size: size,
    caseNo: caseNo,
    caseOrigin: caseOrigin,
    caseType: caseType,
    curPerson: curPerson,
    startTime: startTime,
    endTime: endTime,
    areaId: areaId,
    caseReason: caseReason
});
//数据中心-行政许可
export const appAdminPermintQuery = (page, size, keyWord) => fetch('get', '/app/datacenter/appAdminPermintQuery', {
    page: page,
    size: size,
    keyWord: keyWord
});
//数据中心-法律法规
export const appLawInfoQuery = (page, size, keyWord) => fetch('get', '/app/datacenter/appLawInfoQuery', {
    page: page,
    size: size,
    keyWord: keyWord
});
//数据中心-行政相对人
export const appEnterpriseQuery = (page, size, name, typeTotal) => fetch('get', '/app/datacenter/appEnterpriseQuery', {
    page: page,
    size: size,
    name: name,
    typeTotal: typeTotal
});
//数据中心-事件查询
export const getAppEventsQuery = (page, size, eventsNo, eventsLevel, eventsTypeOne, startTime, endTime, dealUser) => fetch('get', '/app/datacenter/getAppEventsQuery', {
    page: page,
    size: size,
    eventsNo: eventsNo,
    eventsLevel: eventsLevel,
    eventsTypeOne: eventsTypeOne,
    startTime: startTime,
    endTime: endTime,
    dealUser: dealUser
});
//数据中心-事件详情-事件详情
export const eventsDetail = (eventsInfoId, userid) => fetch('get', '/app/datacenter/eventsDetail', {
    eventsInfoId: eventsInfoId,
    userid: userid
});
//数据中心-事件详情-事件处理
export const eventsDealDetailList = (eventsInfoId, userid) => fetch('get', '/app/datacenter/eventsDealDetailList', {
    id: eventsInfoId,
    userid: userid
});
//数据中心-事件详情-处理记录
export const eventsDealRecordList = (eventsInfoId, userid) => fetch('get', '/app/datacenter/eventsDealRecordList', {
    id: eventsInfoId,
    userid: userid
});
//数据中心-企业信息
export const appEnterpriseInfoQuery = (page, size, keyWord, enterpriseType) => fetch('get', '/app/datacenter/appEnterpriseInfoQuery', {
    page: page,
    size: size,
    keyWord: keyWord,
    enterpriseType: enterpriseType
});
//数据中心-督查督办列表
export const appMissionQuery = (page, size, missionName, missionType, startTime, endTime) => fetch('get', '/app/mission/appMissionQuery', {
    page: page,
    size: size,
    missionName: missionName,
    missionType: missionType,
    startTime: startTime,
    endTime: endTime,
});
//数据中心-督查督办处理
export const appMissionQuery1 = (missionCondition, upPicture, Id, dealTime) => fetch('get', '/app/mission/appMissionHandle', {
    missionCondition: missionCondition,
    upPicture: upPicture,
    id: Id,
    dealTime: dealTime
});

// 双随机列表
export const getDoubleRandomList = (page, enterpriseName, checkType, startTime, endTime, checkState) => fetch('get', '/app/doublerandom/appDoubleRandomWaitDone', {
    page: page,
    size: pageSize,
    userId: 'ff8080816df97a2b016dfc93a8f80420',
    enterpriseName: enterpriseName,
    checkType: checkType,
    startTime: startTime,
    endTime: endTime,
    checkState: checkState,
});

// 双随机详情
export const getDoubleRandomDetail = (id) => fetch('get', '/app/doublerandom/appDoubleRandomdetail', {
    id: id,
});

// 双随机检查项列表接口
export const getDoubleRandomCheckList = (checkType) => fetch('get', '/app/doublerandom/appDoubleRandomdetailWait', {
    checkType: checkType,
});

// 双随机上报处理接口
export const uploadDoubleRandomHandle = (id, checkPerson, picAnnexNo, checkResult, resultId, result, describe) => fetch('get', '/app/doublerandom/appDoubleRandomHandle', {
    userid: localStorage.getItem('userId'),
    id: id,
    checkPerson: checkPerson,
    picAnnexNo: picAnnexNo,
    checkResult: checkResult,
    resultId: resultId,
    result: result,
    remarks: describe
});
// 修改密码
export const updatePassword = (oldPassword, newPassword) => fetch('post', '/app/password/updatePassword', {
    oldPassword: oldPassword,
    newPassword: newPassword
});

// 通讯录
// 按照部门分级的通讯录
export const getAddressBookInDept = () => fetch('get', '/app/addressbook/addressBookOut', {});

// 公告
export const getNoticeList = () => fetch('get', '/app/messageinfo/messageInfoOut', {});
export const getNoticeListMuted = () => fetch('get', '/app/messageinfo/messageInfoOut', {}, false);
export const messageReadTimes = (id) => fetch('get', '/app/messageinfo/messageReadTimes', {
    id:id,
});



//待办事项
export const allWaitdo = (page, pageSize) => fetch('get', '/app/waitdo/allWaitdo', {
    page: page,
    size: pageSize,
});




