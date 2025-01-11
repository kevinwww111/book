簡易書籍管理系統

專案主題與目標

此專案旨在提供一個簡單易用的全端網頁應用，允許用戶管理書籍數據。用戶可以執行以下操作：

瀏覽所有書籍

新增書籍

查看特定書籍詳情

更新書籍資料

刪除書籍

專案目標是學習與實踐前後端開發及 MongoDB 整合，並完成 CRUD 操作的全流程。

技術選擇原因

前端：React + Tailwind CSS

React 提供高效的組件化開發方式，適合構建動態網頁。

Tailwind CSS 能快速美化界面，保持樣式靈活性。

後端：Node.js + Express

Node.js 提供高效的非阻塞 I/O，適合處理多用戶的請求。

Express 是輕量且易於擴展的框架，適合構建 API。

資料庫：MongoDB

非關係型資料庫，具有靈活的結構，便於快速開發和修改數據模型。

架構說明

前端：提供視覺化的操作界面，通過 API 與後端交互。

後端：處理業務邏輯和數據操作，並暴露 RESTful API。

資料庫：存儲書籍數據，支持 CRUD 操作。

安裝與執行指引

環境需求

Node.js (v16 以上)

MongoDB (本地或雲端)

瀏覽器 (如 Chrome)

安裝步驟

克隆專案：

git clone https://github.com/your-repo/book-management.git
cd book-management

安裝後端依賴：

cd server
npm install

安裝前端依賴：

cd ../client
npm install

啟動 MongoDB 伺服器：

本地：確保 MongoDB 已啟動，且使用 localhost:27017。

雲端：更新 .env 文件中的 MONGO_URI 為雲端連接字串。

啟動後端伺服器：

cd ../server
npm run dev

啟動前端伺服器：

cd ../client
npm start

在瀏覽器打開 http://localhost:3000。

API 規格說明文件

基本資訊

基礎 URL: http://localhost:5000/api

資料格式: JSON

路由與操作

1. 新增書籍

路由: POST /books

參數: （請求體）

{
  "title": "string",
  "author": "string",
  "publishedYear": "number",
  "isbn": "string",
  "description": "string"
}

回應:

{
  "_id": "string",
  "title": "string",
  "author": "string",
  "publishedYear": "number",
  "isbn": "string",
  "description": "string"
}

2. 獲取所有書籍

路由: GET /books

回應:

[
  {
    "_id": "string",
    "title": "string",
    "author": "string",
    "publishedYear": "number",
    "isbn": "string",
    "description": "string"
  }
]

3. 獲取特定書籍

路由: GET /books/:id

回應:

{
  "_id": "string",
  "title": "string",
  "author": "string",
  "publishedYear": "number",
  "isbn": "string",
  "description": "string"
}

4. 更新書籍

路由: PUT /books/:id

參數: （請求體）

{
  "title": "string",
  "author": "string",
  "publishedYear": "number",
  "isbn": "string",
  "description": "string"
}

回應:

{
  "_id": "string",
  "title": "string",
  "author": "string",
  "publishedYear": "number",
  "isbn": "string",
  "description": "string"
}

5. 刪除書籍

路由: DELETE /books/:id

回應:

{
  "message": "Book deleted successfully."
}

