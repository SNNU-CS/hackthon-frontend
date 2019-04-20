import { link } from '../../miniprogram_npm/vant-weapp/mixins/link';
import { VantComponent } from '../../miniprogram_npm/vant-weapp/common/component';
VantComponent({
  classes: [
    'num-class',
    'desc-class',
    'thumb-class',
    'title-class',
    'price-class',
    'origin-price-class',
  ],
  mixins: [link],
  props: {
    tag: String,
    now_person: String,
    desc: String,
    thumb: String,
    title: String,
    need_person: String,
    centered: Boolean,
    lazyLoad: Boolean,
    thumbLink: String,
    originPrice: String,
    thumbMode: {
      type: String,
      value: 'aspectFit'
    },
    currency: {
      type: String,
      value: '需要人数'
    }
  },
  methods: {
    onClickThumb() {
      this.jumpLink('thumbLink');
    }
  }
});
