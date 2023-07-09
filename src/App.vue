<script setup>
// These Data would be replaced when going on production.
import DesktopMainNews from "./components/DesktopMainNews.vue";
import newsList from "./data/news.json";
import productList from "./data/productList.json";
import {
  group1,
  group2,
  group3,
  group4,
  group5,
  group6,
} from "./data/main-nav.json";

const mainNavLeftGroups = [group1, group2, group3];
const mainNavRightGroups = [group4, group5, group6];

const hotKeyWords = [
  "2024總統大選",
  "3萬補助",
  "泳衣推薦",
  "郭信良連夜聲押",
  "囤房稅",
  "桃園登革熱",
  "洪曉蕾病況",
  "Scfi運價指數",
  "后宮私廚砸店",
  "烏克蘭戰爭",
  "三大法人",
];

const sectionTitles = [
  "焦點",
  "運動",
  "娛樂",
  "FUN",
  "生活",
  "影音",
  "焦點",
  "運動",
  "娛樂",
  "FUN",
  "生活",
  "影音",
];
const activeTitle = "焦點";

const asideCategories = ["熱銷商品", "挑戰低價"];
const activeCategory = "熱銷商品";
</script>

<template>
  <!-- Header Section -->
  <header class="sticky top-0 bg-body md:h-[118px] z-50 w-full">
    <div
      class="mx-auto flex max-w-[1200px] pt-[8px] pb-[10px] px-[12px] items-center lg:p-0"
    >
      <!-- Menu Toggle Button -->
      <button
        class="p-[8px] flex md:hidden items-start justify-center shrink-0 h-full"
      >
        <img class="w-[24px] h-[12px]" src="./assets/icon-menu.svg" />
      </button>

      <!-- Yahoo Logo -->
      <h1
        class="w-[80px] lg:w-[125px] shrink-0 lg:pt-[22px] lg:pb-[12px] lg:pl-[15px]"
      >
        <img
          class="w-[80px] lg:w-[125px] md:p-0 lg:mr-[15px] lg:mt-[8px]"
          alt="Yahoo奇摩"
          title="Yahoo奇摩"
          src="https://s.yimg.com/cv/apiv2/twfrontpage/logo/Yahoo-TW-desktop-FP@2x.png"
        />
      </h1>

      <div class="flex flex-col lg:pt-[22px] lg:ml-[20px] w-full">
        <div class="flex w-full">
          <!-- Search Bar -->
          <form
            method="get"
            action="https://tw.search.yahoo.com/search"
            class="w-[calc(100%-42px)] lg:w-[635px] lg:max-w-[635px] inline-flex items-center relative"
          >
            <input
              placeholder="請輸入關鍵字"
              class="w-full text-[18px] h-[34px] md:h-[50px] pr-[54px] md:pr-[130px] rounded-[17px] md:rounded border-gray-400 border-solid border-[1px] pl-3 py-1 focus:border-yahoo-blue focus:outline-0"
            />

            <!-- Search Button -->
            <button
              class="bg-yblue h-[34px] w-[44px] md:w-[75px] md:h-[50px] rounded-[17px] md:rounded md:rounded-r-[4px] absolute right-0 text-center"
              type="button"
              aria-label="搜尋"
            >
              <img
                class="inline-block"
                width="24"
                height="24"
                src="./assets/magnifier.svg"
                alt="搜尋"
                title="搜尋"
              />
            </button>

            <!-- Microphone Button -->
            <button
              class="hidden md:inline-block absolute h-[50px] w-[40px] text-center right-[75px]"
              type="button"
              aria-label="語音輸入"
            >
              <img
                class="inline-block"
                src="./assets/microphone.svg"
                alt="語音輸入"
                title="語音輸入"
              />
            </button>
          </form>

          <!-- Function Menu -->
          <ul
            class="w-[42px] md:w-[calc(100%-635px)] flex-0 lg:shrink flex items-center justify-end gap-4 md:pr-[20px]"
          >
            <!-- Weather -->
            <li class="hidden lg:flex text-center h-[36px] items-center">
              <div class="mr-1">
                <img
                  class="mr-2 inline-block"
                  src="./assets/cloud.svg"
                  alt="xxxx"
                />
                <span>32°</span>
              </div>
              <span>臺北市</span>
            </li>

            <!-- Member Login Button -->
            <li class="flex-none flex items-center justify-center">
              <a
                class="hidden md:inline-flex text-[13px] font-bold w-[78px] h-[25px] text-ypurple border-ypurple border-solid border-[2px] justify-center items-center rounded-[3px]"
                title="登入"
                href="https://login.yahoo.com/?.src=twfp&.intl=tw&.lang=zh-Hant-TW&.done=https://tw.yahoo.com&activity=uh-signin"
                >登入</a
              >
              <button type="button" class="inline-block">
                <img class="md:hidden" src="./assets/user.svg" />
              </button>
            </li>

            <!-- Bell -->
            <li class="hidden md:flex">
              <button class="text-center w-[30px] h-[36px]">
                <img class="inline-block" src="./assets/bell.svg" alt="xxx" />
              </button>
            </li>

            <!-- Email -->
            <li class="hidden md:flex">
              <button class="text-center w-[30px] h-[36px]">
                <img class="inline-block" src="./assets/email.svg" alt="xxx" />
              </button>
            </li>
          </ul>
        </div>

        <!-- Search Keywords -->
        <div
          class="hidden md:flex h-[1.25rem] flex-wrap mt-[8px] text-[13px] overflow-hidden"
        >
          <span>熱搜：</span>
          <span v-for="(keyWord, i) in hotKeyWords"
            ><a
              href="#"
              class="pr-[10px] text-[#324fe1] hover:underline"
              :class="{
                /** class names for key words other than first item */
                'pl-[10px] border-l-solid border-l-[1px] border-gray-300':
                  i !== 0,
              }"
              >{{ keyWord }}</a
            >
          </span>
        </div>
      </div>
    </div>
  </header>

  <!-- BODY AREA -->
  <div id="page-container" class="max-w-[1200px] m-auto md:pl-[15px] flex">
    <!-- Left: navigation bar -->
    <nav class="w-[145px] leading-none hidden md:flex">
      <div
        v-for="navGroups in [mainNavLeftGroups, mainNavRightGroups]"
        class="w-1/2"
      >
        <ul
          v-for="navItems in navGroups"
          class="border-solid border-b-[1px] border-gray-200 mr-[12px]"
        >
          <li v-for="navItem in navItems">
            <a
              :href="`#${navItem}`"
              class="inline-block py-[8px] text-[15px] text-[#1d1da3] whitespace-nowrap"
              >{{ navItem }}</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Center: main content  -->
    <main class="max-w-[635px]">
      <!-- Section Main Content 1 -->
      <section class="border-[1px] border-solid border-gray-200 mb-[16px]">
        <nav
          class="flex bg-[#f2f2f4] overflow-x-scroll overflow-y-hidden hide-scrollbar"
        >
          <a
            v-for="(title, index) in sectionTitles"
            class="w-[16%] h-[40px] flex-none flex items-center justify-center"
            :class="{
              'bg-white border-t-[3px] border-t-solid border-ypurple text-ypurple font-bold':
                title === activeTitle,
              'inline-flex sm:hidden': index > 5,
            }"
            href="#"
            role="tab"
            >{{ title }}</a
          >
        </nav>
        <!-- v-if desktop, mobile -->
        <section class="bg-white p-[14px] h-[340px]">
          <div class="flex h-full">
            <!-- news image tiles -->
            <div class="w-[56.5%] leading-none">
              <DesktopMainNews
                v-for="(news, index) in newsList.slice(0, 3)"
                :news="news"
                :index="index"
                :class="{
                  'h-[206px] w-full mb-[0.5%]': index === 0,
                  'h-[106px] w-[49.75%] mr-[0.5%] ': index === 1,
                  'h-[106px] w-[49.75%]': index === 2,
                }"
              ></DesktopMainNews>
            </div>

            <!-- news list  -->
            <ul class="w-[43.5%] pl-[13px]">
              <li
                v-for="(news, index) in newsList.slice(3, 9)"
                class="mb-[14px]"
              >
                <a
                  href="#"
                  class="block text-[#324fe1] font-bold text-[16px] hover:underline mb-[10px] leading-none"
                  ><span class="line-clamp-1">{{ news.title }}</span></a
                >
                <span
                  class="text-[13px] line-clamp-1 leading-none text-[rgb(95_95_95)]"
                  >{{ news.abstract }}</span
                >
              </li>
            </ul>
          </div>
        </section>
      </section>

      <!--  Main Content Section 2 -->
      <section class="border-[1px] border-solid border-gray-200 mb-[16px]">
        <nav class="flex bg-[#f2f2f4]">
          <a
            v-for="title in sectionTitles"
            class="w-[16%] h-[40px] flex items-center justify-center"
            :class="{
              'bg-white border-t-[3px] border-t-solid border-ypurple text-ypurple font-bold':
                title === activeTitle,
            }"
            href="#"
            role="tab"
            >{{ title }}</a
          >
        </nav>
        <!-- v-if desktop, mobile -->
        <section class="bg-white">
          <ul class="flex flex-wrap h-full">
            <li v-for="product in productList" class="flex w-1/3">
              <div class="flex p-[4%]">
                <a href="#" class="block w-[40%] mr-[4%]">
                  <img
                    src="/shopItem.jpeg"
                    class="w-full aspect-square"
                    :alt="product.item1"
                  />
                </a>
                <div class="w-[56%] leading-[16px]">
                  <a
                    href="#"
                    :title="product.item1"
                    class="inline-block text-[13px] mb-[5px] text-[#324fe1] hover:underline"
                    >{{ product.item1 }}</a
                  >
                  <a
                    href="#"
                    :title="product.item2"
                    class="inline-block text-[13px] text-[#324fe1] hover:underline"
                    >{{ product.item2 }}</a
                  >
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </main>

    <!-- Right Aside Area -->
    <aside class="hidden md:block pl-[18px] pr-[16px] w-[408px] min-w-[408px]">
      <!-- Yahoo TV -->
      <section id="yahoo-tv" class="mb-[16px]">
        <div class="h-[40px] bg-[#e0e4e9] flex justify-between">
          <div class="inline-flex pl-[10px] bg-[#fadc00] h-full items-center">
            <img
              src="/yahooTV.png"
              class="h-[30px]"
              title="Yahoo TV"
              alt="Yahoo TV"
            />
            <div
              class="border-solid border-t-[40px] border-t-[#fadc00] border-r-[40px] border-r-[#e0e4e9] w-[40px] h-[40px]"
            ></div>
          </div>

          <div class="flex items-center justify-center pr-[10px]">
            <button type="button">
              <img src="/icon-video.png" class="w-[22px]" />
            </button>
          </div>
        </div>
        <div class="w-full">
          <img src="/yahooTV-cover.png" />
        </div>
        <div class="flex h-[44px] items-center">
          <img
            src="/tv-head.png"
            class="w-[32px] h-[32px] mr-[6px] rounded-full"
          />
          <a class="text-[#324FE1] hover:underline font-bold"
            >韓國瑜直球對決拒韓冰參選？于美人大讚韓冰</a
          >
        </div>
      </section>

      <!-- 優質好物 -->
      <section
        v-for="i in 2"
        class="border-[1px] border-solid border-gray-200 mb-[16px]"
      >
        <header class="flex bg-[#f2f2f4] justify-between">
          <h1 class="flex items-center pl-2 text-[18px] text-[#606060]">
            <span class="font-normal">優質好物</span>
          </h1>

          <nav class="flex bg-[#f2f2f4]">
            <a
              v-for="category in asideCategories"
              class="w-[100px] h-[40px] flex items-center justify-center"
              :class="{
                'bg-white border-t-[3px] border-t-solid border-ypurple text-ypurple font-bold':
                  category === activeCategory,
              }"
              href="#"
              role="tab"
              >{{ category }}</a
            >
          </nav>
        </header>
        <section class="bg-white">
          <ul class="flex flex-wrap h-full">
            <li v-for="product in productList.slice(0, 4)" class="flex w-1/4">
              <div class="flex flex-col p-[7px]">
                <a href="#" class="block w-[100%] mb-[4%]">
                  <img
                    src="/product.jpeg"
                    class="w-full aspect-square"
                    :alt="product.item1"
                  />
                </a>
                <div class="w-[100%] leading-[13px]">
                  <span
                    class="text-[13px] text-[#5f5f5f] inline-block mb-[4px]"
                  >
                    滿1件享89折</span
                  >

                  <a
                    href="#"
                    :title="product.item2"
                    class="line-clamp-2 text-[13px] leading-[16px] text-[#324fe1] hover:underline"
                    >歐洲精品大牌限時89折優惠</a
                  >
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>
    </aside>
  </div>
</template>
