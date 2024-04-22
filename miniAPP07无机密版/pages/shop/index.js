// pages/list4/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey:0,//默认激活第一个导航栏
    goodsData:[
      {
        title:'分类一',
        products:[
          {id:1,image:"/image/shop.png",name:'商品1',price:'¥200'},
          {id:2,image:"/image/shop.png",name:'商品2',price:'¥200'},
          {id:3,image:"/image/shop.png",name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类二',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类三',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类四',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类五',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类六',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类七',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类八',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类九',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类十',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类11',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类12',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类13',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类14',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类15',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类16',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类17',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类18',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类19',
        products:[
          {id:1,image:'/image/shop.png',name:'商品1',price:'¥200'},
          {id:2,image:'/image/shop.png',name:'商品2',price:'¥200'},
          {id:3,image:'/image/shop.png',name:'商品3',price:'¥200'}
        ]
      },

      {
        title:'分类20',
        products:[
          {id:1,image:"/image/shop.png",name:'商品1',price:'¥200'},
          {id:2,image:"/image/shop.png",name:'商品2',price:'¥200'},
          {id:3,image:"/image/shop.png",name:'商品3',price:'¥200'}
        ]
      },
    ]
  },

  onChange(e){
    /*获取被点击的标题身上的索引，给data中的activeKey赋值就行,根据不同的索引渲染右侧的商品内容*/
    const {index}=e.currentTarget.dataset;
    // let rightContent = this.Cates[index].products;
    this.setData({
          activeKey:index,
          // rightContent
    });
  },

  // onChange:function(event){
  //   const index = event.currentTarget.dataset.index;
  //   this.setData({
  //     activeKey:index
  //   });
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    this.getCates();
  },
  // 获取分类数据
  getCates(){
    wx.request({
      url: 'url',
      data: data,
      dataType: dataType,
      enableCache: true,
      enableChunked: true,
      enableHttp2: true,
      enableHttpDNS: true,
      enableQuic: true,
      forceCellularNetwork: true,
      header: header,
      httpDNSServiceId: 'httpDNSServiceId',
      method: method,
      responseType: responseType,
      timeout: 0,
      success: (result) => {},
      fail: (err) => {},
      complete: (res) => {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})