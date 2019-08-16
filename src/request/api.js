// 开发环境
const HOST = 'http://lubikaifa.natapp1.cc/'

// 用户登录接口
const USER_LOGIN_API = 'userController/login'

// 用户注册接口
const USER_REGISTER_API = 'userController/register'

// 用户日记、笔记、待办、日程、查询接口
const USER_NOTE_INFO_API = 'userControll/getUserRecordPenByType'

// 添加日程接口
const ADD_SCHEDULE_API = 'scheduleController/addSchedule'

// 修改日程接口
const UPDATE_SCHEDULE_API = 'scheduleController/updateSchedule'

// 删除日程接口
const DELETE_SCHEDULE_API = 'scheduleController/deletSchedule'

// 添加日记接口
const ADD_NOTE_API = 'noteController/addNote'

// 修改日记接口
const UPDATE_NOTE_API = 'noteController/updateNote'

// 删除日记接口
const DELETE_NOTE_API = 'noteController/deletNote'

// 添加待办接口
const ADD_TODO_API = 'daiBanController/addDaiBan'

// 修改待办接口
const UPDATE_TODO_API = 'daiBanController/updateDaiBan'

// 删除待办接口
const DELETE_TODO_API = 'daiBanController/deletDaiBan'

export default {
    HOST,
    USER_LOGIN_API,
    USER_REGISTER_API,
    USER_NOTE_INFO_API,
    ADD_SCHEDULE_API,
    UPDATE_SCHEDULE_API,
    DELETE_SCHEDULE_API,
    ADD_NOTE_API,
    UPDATE_NOTE_API,
    DELETE_NOTE_API,
    ADD_TODO_API,
    UPDATE_TODO_API,
    DELETE_TODO_API
}

