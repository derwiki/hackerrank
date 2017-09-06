def super_reduced_string(s)
    retval = s
    while (reducible?(retval)) do
        retval = reducer(retval)
        puts "retval: #{retval}"
    end
    retval.empty? ? "Empty String" : retval
end

def reducible?(s)
  puts "reducible? [#{s[0]}] , [#{s[1]}]"
  if s[0].nil? || s[0].empty?
    return false
  elsif s[0] == s[1]
    puts "reducible!"
    return true
  else
    return reducible?(s[1..-1])
  end
end

def reducer(s)
  puts "reducer? [#{s[0]}] , [#{s[1]}]"
  if s[0].nil? || s[0].empty?
      return ''
  elsif s[0] == s[1]
      return reducer(s[2..-1])
  else
      return s[0] + reducer(s[1..-1])
  end
end

s = gets.strip
result = super_reduced_string(s)
puts result;
