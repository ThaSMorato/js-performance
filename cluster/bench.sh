URL=localhost:3000
npx autocannon $URL -m POST \
    --warmup [-c 1 -d 3] \
    --connections 500 \
    --pipeline 10 \
    -- rendarStatusCodes

# cat log/log.txt | grep 12548 | wc -l
# sever running at 3000 and PID 21336 = 0
# sever running at 3000 and PID 12300 = 0
# sever running at 3000 and PID 9872 = 77
# sever running at 3000 and PID 16684 = 0
# sever running at 3000 and PID 9248 = 113
# sever running at 3000 and PID 22008 = 0
# sever running at 3000 and PID 8556 = 5
# sever running at 3000 and PID 17564 = 0
# sever running at 3000 and PID 14124 = 0
# sever running at 3000 and PID 17324 = 43697
# sever running at 3000 and PID 21656 = 43331
# sever running at 3000 and PID 12548 = 37046

# Primary 18484 is running = 2