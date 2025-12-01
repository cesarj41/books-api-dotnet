using FluentAssertions;

namespace BooksApi.UnitTests;

public class UnitTest1
{
    [Fact]
    public void Test1()
    {
        const string name = "Cesar";
        name.Should().Be("Cesar");
    }
}