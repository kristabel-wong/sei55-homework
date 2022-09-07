class Robot

    def initialize
        @name = generate_serial
        @instruction_counter = 0

        # creation and reset timers
        @created_at = Time.now.to_i
        @reset_at = Time.now.to_i
    end

    def name
        @instruction_counter += 1
        @name
    end

    def reset
        @name = generate_serial
        @instruction_counter += 1
        @reset_at = Time.now.to_i
    end

    def generate_serial
        ('AA'..'ZZ').to_a.sample + ('000'..'999').to_a.sample
    end

    def instruction_counter
        @instruction_counter
    end

    def timers
        time_since_creation = Time.now.to_i - @created_at
        time_since_reset = Time.now.to_i - @reset_at

        "#{time_since_reset} seconds since last reboot, #{time_since_creation} seconds since creation"
    end

end


robot1 = Robot.new 
puts robot1.name
puts robot1.name
puts robot1.name
sleep 2
robot1.reset 
sleep 1
puts robot1.name
# puts robot1.instruction_counter # 5
puts robot1.timers