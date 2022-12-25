/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfeaa75f1be2d505d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '80f0cf498ec6c7300f2451b70f1a96a5',

  PROVINCE: '河南',
  CITY: '南阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '4CHEN',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9xJ85kgFhrBz5fRZgZQ9wRkM1uw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'yiDgSOndgd09NsEDa46V7z0ePPj8Iaynwv7LG2qWJtU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      //horoscopeDate: '04-16',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'bb', year: '1998', date: '11-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: 'cc', year: '2000', date: '03-12',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '01-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-01-01' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],
  USERS: [
    {
      // 想要发送的人的名字
      name: '4CHEN',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o9xJ85nuXjEMkAe1ROFX6LB_QYFQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'yiDgSOndgd09NsEDa46V7z0ePPj8Iaynwv7LG2qWJtU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      //horoscopeDate: '04-16',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'bb', year: '1998', date: '11-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: 'cc', year: '2000', date: '03-12',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '01-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-01-01' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'IKAV4azgLQT7uv0w1XsUHj6fmZBsI6b0qlRNxitk_Mw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      //id: 'o9xJ85nuXjEMkAe1ROFX6LB_QYFQ',
    }
  ],

}

module.exports = USER_CONFIG

