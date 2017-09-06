stdin = "ppffccmmssnnhhbbmmggxxaaooeeqqeennffzzaaeeyyaaggggeessvvssggbbccnnrrjjxxuuzzbbjjrruuaaccaaoommkkkkxx"

def super_reduced_string(s)
    buffer = ""
    i = 0
    while (i <= s.length-1)
        cur = s[i]
        nex = s[i+1]
        if cur == nex
            puts "cur: #{cur} == nex: #{nex}; skipping"
            i += 2
        else
            puts "cur: #{cur} != nex: #{nex}; adding #{cur}"
            buffer << cur
            i += 1
        end
    end
    buffer
end

puts super_reduced_string(stdin)
