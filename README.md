# Thông tin cơ bản
Mô phỏng tên lửa đơn giản bằng thuật toán **Pure pursuit** (không phải thuật toán Proportional Navigation, nhức đầu lắm).

Đọc code bị đột quỵ thì tôi không chịu trách nhiệm đâu :)

# Thuật toán
Thuật toán thực ra rất đơn giản, tên lửa (xanh) sẽ luôn hướng đến vị trí của máy bay (đỏ). Tên lửa sẽ bay theo góc *a* được tính bằng định lý cos *(ám ảnh vc)*. a = acos((d²+y²-x²)/(2dy))
`let a = Math.acos((Math.pow(d,2)+Math.pow(y,2)-Math.pow(x,2))/(2*d*y)) * (180/Math.PI)`

* d: khoảng cách
`let d = Math.sqrt(Math.pow((this.x - target.x), 2) + Math.pow((this.y - target.y),2))`
* x: khoảng cách theo trục hoành
`let x = Math.abs(this.x - target.x)`
* y: khoảng cách theo trục tung (|y1-y2|)
`let y = Math.abs(this.y - target.y)`

Tất cả đều gói gọn trong hàm **HomingAlgorithm**

# Cách reset mô phỏng
Vì quá lười code nên cứ nhấn phím f5 hoặc refresh lại trang để chạy lại mô phỏng nha =))))
### Nghịch web vui vẻ
