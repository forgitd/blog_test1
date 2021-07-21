<template>

  <div class="search-box">

    <input class="search-txt" type="text" placeholder="search content ...">

    <a class="search-btn" href="#">

      <i class=" fas fa-search"></i>

    </a>

  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>

  body {
    margin: 0;
    padding: 0;
  }

  .search-box {
    /*position: absolute;*/
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%, -50%);*/

    height: 40PX;
    border-radius: 40PX;
    padding: 10PX;

    background: #5b5b5b;
  }

  .search-btn {
    float: right;
    width: 40PX;
    height: 40PX;
    border-radius: 50%;

    color: #f40;
    /* background: #5b5b5b; */
    background: none;

    display: flex;

    justify-content: center;
    align-items: center;

    text-decoration: none;

    transition: 0.6s;
  }

  .search-txt {
    border: none;
    background: none;
    outline: none;

    float: left;
    padding: 0;

    color: #ffffff;
    font-size: 16PX;
    line-height: 40PX;

    width: 0;

    transition: 0.3s;
  }

  .search-box:hover > .search-txt {
    width: 230px;
    padding: 0 10px;
  }

  .search-box:hover > .search-btn {
    background: #FFFFFF;
  }

</style>