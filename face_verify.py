import cv2  
from deepface import DeepFace

def face(image):
    img = cv2.imread(image)
    h, w, channels = img.shape
    half = w//2
    left_part = img[:, :half]
    right_part = img[:, half:] 
    cv2.imwrite('left.jpg', left_part)
    cv2.imwrite('right.jpg', right_part)
    verification = DeepFace.verify(img1_path = r"right.jpg", img2_path = r"left.jpg")
    x = verification['verified']
    print (x)

