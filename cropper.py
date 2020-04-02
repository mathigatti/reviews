import os
import sys

if not os.path.exists('cropped_images'):
    os.makedirs('cropped_images')

for file in os.listdir(sys.argv[1]):
	os.system('convert {} -crop 250x250+5+5 cropped_images/{}'.format(sys.argv[1]+'/'+file,file))