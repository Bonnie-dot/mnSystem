<style>
.group{
    height:200px;
    background: #fff;
    margin: 0 auto;
    width: 50%;
    margin-top: 15px;
    padding: 0 20px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
}
.group .tag{
    width: 20%;
    height: 100px;
    background:#5cadff;
    color: #fff;
    font-size: 36px;
    text-align: center;
    line-height: 100px; 
    margin-right: 15px;
}
.group p{
    padding: 5px 0;
}
.group:hover {
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);
}
</style>
<template>
    <div class="container">
        <section class="group">
            <div class="tag">javascript</div>
            <div class="details">
                <summary class="title">
                    <h2>这个是title</h2>
                </summary>
                <p class="content">这是内容</p>
                <div class="last">
                    <span class="time"><Icon type="md-alarm" />2019-03-05 20.88</span>
                    <span class="reading"><Icon type="ios-eye" />200</span>
                </div>
            </div>
        </section>
         <section class="group">
            <div class="tag">javascript</div>
            <div class="details">
                <summary class="title">
                    <h2>这个是title</h2>
                </summary>
                <p class="content">这是内容</p>
                <div class="last">
                    <span class="time"><Icon type="md-alarm" />2019-03-05 20.88</span>
                    <span class="reading"><Icon type="ios-eye" />200</span>
                </div>
            </div>
        </section>
         <section class="group">
            <div class="tag">javascript</div>
            <div class="details">
                <summary class="title">
                    <h2>这个是title</h2>
                </summary>
                <p class="content">这是内容</p>
                <div class="last">
                    <span class="time"><Icon type="md-alarm" />2019-03-05 20.88</span>
                    <span class="reading"><Icon type="ios-eye" />200</span>
                </div>
            </div>
        </section>
         <section class="group">
            <div class="tag">javascript</div>
            <div class="details">
                <summary class="title">
                    <h2>这个是title</h2>
                </summary>
                <p class="content">这是内容</p>
                <div class="last">
                    <span class="time"><Icon type="md-alarm" />2019-03-05 20.88</span>
                    <span class="reading"><Icon type="ios-eye" />200</span>
                </div>
            </div>
        </section>
         <section class="group">
            <div class="tag">javascript</div>
            <div class="details">
                <summary class="title">
                    <h2>这个是title</h2>
                </summary>
                <p class="content">这是内容</p>
                <div class="last">
                    <span class="time"><Icon type="md-alarm" />2019-03-05 20.88</span>
                    <span class="reading"><Icon type="ios-eye" />200</span>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    layout: "front",
}
</script>


