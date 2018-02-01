var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "서울시 금천구 가산디지털2로 115 대륭테크노타운3차";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "김민지";
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/team.pdf", 
			 title: "Team",
			 name: "Impression",
			 img: "team/TeamImpression.png",
			 type : true, 
			 contents: "처음하는 팀프로젝트이고 이렇게 화면이 많은 페이지를 만드는 프로젝트도 처음이라서 팀원들 간의 대화도 많이 나누고 역할분담도 어떻게 해야할지 많이 고민했었습니다. 그렇지만 다들 제 역할을 열심히 했기 때문에 좋은 결과를 낼 수 있었고 팀원들끼리도 많이 친해져서 좋은 팀워크를 배웠습니다. 앞으로의 프로젝트를 어떻게 해야할지의 방향도 배워서 유익했던 시간이었습니다."
			},{
			 path: "portfolio/",
			 url : "personal/personal.png", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/personal.png",
			 type : false,
			 contents: "개인프로젝트를 하기에 앞서 기획하는 부분부터 혼자 하려니까 막막했고 구현까지도 많은 시간이 걸렸습니다. 주어진 시간 내에는 완성시키지 못했지만 프로젝트를 하는 기간에 스스로 고민하고 상상하면서 그래도 혼자하면서 얻은 것은 있다고 느꼈습니다. 다음에 다시 개인프로젝트를 진행하게 된다면 완벽하게 완성시켜서 구현해보고 싶은 욕심이 생겼습니다."
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});