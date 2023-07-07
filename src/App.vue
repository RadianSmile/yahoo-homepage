<script setup>
import DesktopMainNews from "./components/DesktopMainNews.vue";
import newsList from "./data/news.json";

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
const sectionTitles = ["焦點", "運動", "娛樂", "FUN", "生活", "影音"];

const activeTitle = "焦點";
</script>

<template>
  <!-- Header Section -->
  <header class="sticky top-0 bg-body h-[118px] z-50">
    <div class="container mx-auto flex max-w-[1200px] min-w-[980px]">
      <h1 class="pt-[22px] pb-[12px] pl-[15px]">
        <img
          class="w-[125px] mr-[15px] mt-[8px]"
          alt="Yahoo奇摩"
          title="Yahoo奇摩"
          src="https://s.yimg.com/cv/apiv2/twfrontpage/logo/Yahoo-TW-desktop-FP@2x.png"
        />
      </h1>

      <div class="flex flex-col pt-[22px] ml-[20px] w-full">
        <div class="flex">
          <!-- Search Bar -->
          <form
            method="get"
            action="https://tw.search.yahoo.com/search"
            class="w-full max-w-[635px] inline-flex items-center relative"
          >
            <input
              placeholder="請輸入關鍵字"
              class="w-full text-[18px] h-[50px] border-gray-400 border-solid border-[1px] rounded pl-3 pr-[130px] py-1 focus:border-yahoo-blue focus:outline-0"
            />

            <!-- Search Button -->
            <button
              class="bg-yblue rounded-r-[4px] h-[50px] absolute right-0 w-[75px] text-center"
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
              class="absolute h-[50px] w-[40px] text-center right-[75px]"
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
            class="w-[calc(100%-635px)] flex items-center justify-end gap-4 pr-[20px]"
          >
            <!-- Weather -->
            <li class="flex text-center h-[36px] items-center">
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

            <!-- Login Button -->
            <li>
              <a
                class="text-[13px] font-bold w-[78px] h-[25px] inline-block text-ypurple border-ypurple border-solid border-[2px] flex justify-center items-center rounded-[3px]"
                title="登入"
                href="https://login.yahoo.com/?.src=twfp&.intl=tw&.lang=zh-Hant-TW&.done=https://tw.yahoo.com&activity=uh-signin"
                >登入</a
              >
            </li>

            <!-- Bell -->
            <li>
              <button class="text-center w-[30px] h-[36px]">
                <img class="inline-block" src="./assets/bell.svg" alt="xxx" />
              </button>
            </li>

            <!-- Email -->
            <li>
              <button class="text-center w-[30px] h-[36px]">
                <img class="inline-block" src="./assets/email.svg" alt="xxx" />
              </button>
            </li>
          </ul>
        </div>

        <!-- Search Keywords -->
        <div
          class="h-[1.25rem] flex flex-wrap mt-[8px] text-[13px] overflow-hidden"
        >
          <span>熱搜：</span>
          <span v-for="(keyWord, i) in hotKeyWords"
            ><a
              href="#"
              class="pr-[10px] text-[#324fe1]"
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
  <div
    id="page-container"
    class="min-w-[980px] max-w-[1200px] m-auto pl-[15px] flex"
  >
    <!-- Left: navigation bar -->
    <nav class="flex w-[145px] leading-none">
      <div v-for="k in 2" class="w-1/2">
        <ul
          v-for="j in 4"
          class="border-solid border-b-[1px] border-gray-200 mr-[12px]"
        >
          <li v-for="i in 4">
            <a
              :href="`#${k}${j}`"
              class="inline-block py-[8px] text-[15px] text-[#1d1da3]"
              >新聞</a
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Center: main content  -->
    <main class="max-w-[635px] w-full">
      <!-- Section Main Content 1 -->
      <section class="border-[1px] border-t-0 border-solid border-gray-200">
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

      <!-- TODO: Section Main Content 2 -->
      <ul>
        <li></li>
      </ul>
    </main>

    <!-- TODO: right -->
    <aside></aside>
  </div>
</template>
