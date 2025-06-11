const attractions = [
    { name: "文武廟", description: "供奉文武聖賢的廟宇，擁有絕佳湖景", duration: "1小時", image: "https://photo.travelking.com.tw/scenery/CAD571B3-2293-4F65-9893-C51EFBF7CC45_e.jpg" },
    { name: "伊達邵", description: "原住民文化村，體驗邵族文化", duration: "1.5小時", image: "https://lusihan.com.tw/wp-content/uploads/2023/06/%E6%97%A5%E6%9C%88%E6%BD%AD%E6%99%AF%E9%BB%9E_%E4%BC%8A%E9%81%94%E9%82%B5%E7%A2%BC%E9%A0%AD5.jpg" },
    { name: "日月潭纜車", description: "空中欣賞日月潭全景", duration: "1小時", image: "https://www.cingjing.com.tw/upimgs/trip/athena20100107124242fy.jpg" },
    { name: "向山遊客中心", description: "現代建築與湖景結合，提供旅遊資訊", duration: "0.5小時", image: "https://cw-image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fcdn-smiletaiwan.cw.com.tw%2Farticle%2F202106%2Farticle-60d1569a39b38.jpg/?w=1600&format=webp" },
    { name: "水社碼頭", description: "搭船遊湖的起點，風景優美", duration: "1小時", image: "https://www.huyue.com.tw/fac-detail/upload/banner_ins_list/647943d139e63cc27302f05aa2f2adae.jpg" },
    { name: "慈恩塔", description: "登山俯瞰日月潭，風景壯麗", duration: "1.5小時", image: "https://i0.wp.com/journey.tw/wp-content/uploads/2020-10-26-161143-67.jpg?resize=1100%2C734&quality=99&ssl=1" },
    { name: "玄光寺", description: "湖邊佛教寺廟，附近有著名茶葉蛋", duration: "1小時", image: "https://cmeyy.tw/wp-content/uploads/2024/11/DSC08296.jpg" },
    { name: "九族文化村", description: "體驗多元原住民文化與遊樂設施", duration: "3小時", image: "https://www.cingjing.com.tw/upimgs/trip/athena20080518190614up.jpg" }
];

document.addEventListener("DOMContentLoaded", () => {
    const attractionList = document.getElementById("attraction-list");
    const itineraryList = document.getElementById("itinerary-list");
    const generatePlanButton = document.getElementById("generate-plan");

    // 渲染景點選擇清單
    attractions.forEach(attraction => {
        const div = document.createElement("div");
        div.className = "attraction-item";
        div.innerHTML = `
            <img src="${attraction.image}" alt="${attraction.name}" onerror="this.src='images/fallback.jpg'">
            <input type="checkbox" id="${attraction.name}" value="${attraction.name}">
            <label for="${attraction.name}">${attraction.name} - ${attraction.description} (${attraction.duration})</label>
        `;
        attractionList.appendChild(div);
    });

    // 生成行程
    generatePlanButton.addEventListener("click", () => {
        const selectedAttractions = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(input => input.value);
        
        if (selectedAttractions.length > 4) {
            alert("最多只能選擇 4 個景點！");
            return;
        }

        itineraryList.innerHTML = "";
        if (selectedAttractions.length === 0) {
            itineraryList.innerHTML = "<li>請至少選擇一個景點！</li>";
            return;
        }

        selectedAttractions.forEach((name, index) => {
            const attraction = attractions.find(a => a.name === name);
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${attraction.image}" alt="${attraction.name}" onerror="this.src='images/fallback.jpg'">
                ${index + 1}. ${attraction.name} - ${attraction.description} (建議停留: ${attraction.duration})
            `;
            itineraryList.appendChild(li);
        });
    });
});