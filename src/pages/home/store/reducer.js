import { fromJS } from 'immutable';

const defaultState = fromJS({
  articleList:[
    {
      id: 1,
      title: '疫情，让我认识到了老婆原来是个农村人',
      desc: '我和老婆结婚已经八年了，在这八年当中，我们几乎是天天吵架，也不知道是为啥吵架，反正总能有话题吵架。 几度我们到了离婚的边缘，就算没有离婚，日子也...',
      img: 'https://upload-images.jianshu.io/upload_images/18428859-45ae4e678de02148.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '两瓶饮料',
      desc: '父亲常年在外地打工，有一次，父亲回家，特意给儿子带了礼物，是两瓶饮料。儿子迫不及待地拧开瓶盖，咕咚就一大口。 父亲赶紧问，好喝吗？儿子嘴里还含着...',
      img: ''
    },
    {
      id: 3,
      title: '多读点书真好',
      desc: '我文化不高，凌晨三点到早上十点得帮现在的家批菜，总想着白天再找份兼职，自己想赚点钱帮帮女儿。 找实体店或工厂打工都顾不了早上卖菜。就想找个在家自...',
      img: 'https://upload-images.jianshu.io/upload_images/19716661-fdb8ea0fd9d47ecf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 4,
      title: '实录：再婚后我生了两个儿子，却不敢告诉丈夫我还有个女儿',
      desc: '01 曾经，我有个很幸福的家庭，老公做生意，我当老师，我们有个活泼可爱的女儿。 我和老公是自由恋爱，谈婚论嫁也很顺利，虽然日子过得很平淡，但我总...',
      img: ''
    },
    {
      id: 5,
      title: '实录：再婚后我生了两个儿子，却不敢告诉丈夫我还有个女儿',
      desc: '01 曾经，我有个很幸福的家庭，老公做生意，我当老师，我们有个活泼可爱的女儿。 我和老公是自由恋爱，谈婚论嫁也很顺利，虽然日子过得很平淡，但我总...',
      img: ''
    },
    {
      id: 6,
      title: '实录：再婚后我生了两个儿子，却不敢告诉丈夫我还有个女儿',
      desc: '01 曾经，我有个很幸福的家庭，老公做生意，我当老师，我们有个活泼可爱的女儿。 我和老公是自由恋爱，谈婚论嫁也很顺利，虽然日子过得很平淡，但我总...',
      img: ''
    },
    {
      id: 7,
      title: '实录：再婚后我生了两个儿子，却不敢告诉丈夫我还有个女儿',
      desc: '01 曾经，我有个很幸福的家庭，老公做生意，我当老师，我们有个活泼可爱的女儿。 我和老公是自由恋爱，谈婚论嫁也很顺利，虽然日子过得很平淡，但我总...',
      img: ''
    },    
    {
      id: 8,
      title: '实录：再婚后我生了两个儿子，却不敢告诉丈夫我还有个女儿',
      desc: '01 曾经，我有个很幸福的家庭，老公做生意，我当老师，我们有个活泼可爱的女儿。 我和老公是自由恋爱，谈婚论嫁也很顺利，虽然日子过得很平淡，但我总...',
      img: ''
    },
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },
    {
      id: 2,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id: 3,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id: 4,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }
  ]
})

export default(state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}