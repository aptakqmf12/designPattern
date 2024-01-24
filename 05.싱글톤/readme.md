# 싱글톤 패턴

- 유일한 인스턴스만 생성하여 전역 접근을 제공하는 패턴.
- 전역 변수와는 다르게 필요시에만 인스턴스를 만들 수 있음.
- 인스턴스가 자원을 많이 잡아먹는 경우에 유용함.
- 스레드 풀, 캐시, 대화상자, 레지스트리설정을 처리하는 객체, 로그 기록용 객체, 등등은 1개의 인스턴스만으로도 잘 돌아감. 오히려 2개 이상이면 불필요한 자원을 먹거나 결과에 일관성이 없을 수 있음.

## 고전적인 싱글톤 패턴

- 생성자를 `private`로 설정하고 객체 호출시에는 static 함수를 사용.
- 인스턴스가 없는경우엔 생성, 있는 경우엔 기존에 생성한 인스턴스를 반환.

```java
public class Singleton {
    private static Singleton uniqueInstance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (uniqueInstance == null) {
            uniqueInstance = new Singleton();
        }
        return uniqueInstance;
    }
}
```

## 멀티스레딩 문제

- 여러개의 쓰레드가 동시에 `getInstance()` 메소드에 접근할때 여러개의 인스턴스가 만들어 질 수 있다.

### 해결방법

- `synchronized` 메소드 선언
  - 이렇게하면 최초 접근한 쓰레드가 해당 메소드 호출을 종료할때까지 접근을 lock시켜준다.
  - 호출시마다 lock이 걸려 성능 저하 이슈가있음
  - 오버헤드가 커서 권장하지 않는 방식

```java
class Singleton {
    private static Singleton myInstance = null;

    private Singleton() {}

    public static synchronized Singleton getInstance() {
        if (myInstance == null) {
            myInstance = new Singleton();
        }

        return myInstance;
    }
}
```

- `DCL(Double Checked Locking)방식`
  - 위에선 메소드를 호출할때마다 lock이 걸리는것이 아닌, 인스턴스가 존재하지 않을때만 lock을 걸어서 인스턴스 생성시 생기는 동시성 문제를 해결해주는 방법.
  - synchronized 키워드를 `myInstance == null`일때만 실행한다.
  - 하지만 2개이상의 쓰레드가 동시에 접근하는경우 낮은 확률로 하나의 쓰레드에서 업데이트 한 값을 다른 쓰레드에서 확인 할 수 없는 `visibility`현상이 생긴다
    - A쓰레드가 최초 접근하여 getInstance의 synchronized 스코프를 실행 -> A에서 myInstance 메모리 공간을 할당하고 Singleton객체의 레퍼런스를 할당하기전에 동시에 B쓰레드가 접근하는 경우.

```java
class Singleton {
    private static Singleton myInstance = null;

    private Singleton() {}

    public static Singleton getInstance() {
        if (myInstance == null) {
            synchronized (Singleton.class) {
                if (myInstance == null) {
                    myInstance = new Singleton();
                }
            }
        }

        return myInstance;
    }
}
```

- `volatile` 키워드 사용
- volatile 키워드를 사용하면 myInstance값을 할당, 수정할때 메인 메모리에서 바로 사용함. 이로 인해 visibility 현상을 해결할 수 있다

```java
class Singleton {
    private volatile  static Singleton myInstance = null;

    ... 위와 동일.
}
```
