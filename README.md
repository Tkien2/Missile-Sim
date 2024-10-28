#Thông tin cơ bản
Mô phỏng tên lửa đơn giản bằng thuật toán **Pure pursuit** (không phải thuật toán Proportional Navigation, nhức đầu lắm).

Đọc code bị đột quỵ thì tôi không chịu trách nhiệm đâu :)
#Thuật toán
Thuật toán thực ra rất đơn giản, tên lửa (xanh) sẽ luôn hướng đến vị trí của máy bay (đỏ). Tên lửa sẽ bay theo góc *a* được tính bằng định lý cos *(ám ảnh vc)*. a = (d²+y²-x²)/(2dy)
* d: khoảng cách (√(x²+y²))
* x: khoảng cách theo trục hoành (|x1-x2|)
* y: khoảng cách theo trục tung (|y1-y2|)

Tất cả đều gói gọn trong hàm **HomingAlgorithm**

#Cách reset mô phỏng
Vì quá lười code nên cứ nhấn phím f5 hoặc refresh lại trang để chạy lại mô phỏng nha =))))
###Nghịch web vui vẻ###
