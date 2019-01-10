# weixin-learn
微信小程序入门
## 入门文档

### App启动文件生命周期
tab之间的切换,不会让页面重新加载，当然也不会卸载了，只会显示隐藏
在用NavigatorTo跳转的目标页会另加载，跳转之前的页面会隐藏
回退（NavigatorBack）,目标页面会被显示（show）,不会加载，回退之前的页面会被卸载
```
onLaunch
```
```
onShow
```

```
onHide
```
### 页面生命周期
```
onLoad
```
```
onReady
```
```
onShow
```
```
onHide
```
```
onUnload
```